import AsyncStorage from '@react-native-async-storage/async-storage';
import aesjs from 'aes-js';
import { getRandomBytes } from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';

/**
 * Encrypted storage for the Supabase session.
 *
 * Android's Keystore-backed SecureStore only holds small values, and a session is larger,
 * so the session is AES-256 encrypted and kept in AsyncStorage while the random key lives
 * in SecureStore (never leaves the device, not included in backups).
 */
const KEY_SUFFIX = '.k';
const ENC_PREFIX = 'enc1:';

async function keyFor(name: string, create: boolean): Promise<Uint8Array | null> {
  const stored = await SecureStore.getItemAsync(name + KEY_SUFFIX);
  if (stored) return aesjs.utils.hex.toBytes(stored);
  if (!create) return null;
  const key = getRandomBytes(32);
  await SecureStore.setItemAsync(name + KEY_SUFFIX, aesjs.utils.hex.fromBytes(key), {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
  return key;
}

function encrypt(key: Uint8Array, value: string): string {
  const iv = getRandomBytes(16);
  const ctr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(iv));
  const data = ctr.encrypt(aesjs.utils.utf8.toBytes(value));
  return ENC_PREFIX + aesjs.utils.hex.fromBytes(iv) + ':' + aesjs.utils.hex.fromBytes(data);
}

function decrypt(key: Uint8Array, stored: string): string {
  const [ivHex, dataHex] = stored.slice(ENC_PREFIX.length).split(':');
  const ctr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(aesjs.utils.hex.toBytes(ivHex)));
  return aesjs.utils.utf8.fromBytes(ctr.decrypt(aesjs.utils.hex.toBytes(dataHex)));
}

export const secureStorage = {
  async getItem(name: string): Promise<string | null> {
    const stored = await AsyncStorage.getItem(name);
    if (stored == null) return null;
    // Sessions saved by older app versions were plain text; they're re-saved encrypted on next write.
    if (!stored.startsWith(ENC_PREFIX)) return stored;
    try {
      const key = await keyFor(name, false);
      return key ? decrypt(key, stored) : null;
    } catch {
      return null;
    }
  },
  async setItem(name: string, value: string): Promise<void> {
    const key = await keyFor(name, true);
    await AsyncStorage.setItem(name, encrypt(key!, value));
  },
  async removeItem(name: string): Promise<void> {
    await AsyncStorage.removeItem(name);
    await SecureStore.deleteItemAsync(name + KEY_SUFFIX).catch(() => {});
  },
};
