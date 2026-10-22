import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';

const MAX_SIDE = 1600;

/**
 * Phone cameras produce 3–5 MB photos; that makes uploads and lists slow. Scale the long side
 * down to 1600 px and save as JPEG (~250–500 KB). Falls back to the original if anything fails.
 */
export async function shrinkPhoto(uri: string, width?: number, height?: number): Promise<{ uri: string; mimeType: string }> {
  try {
    const ctx = ImageManipulator.manipulate(uri);
    if (width && height && Math.max(width, height) > MAX_SIDE) {
      ctx.resize(width >= height ? { width: MAX_SIDE } : { height: MAX_SIDE });
    } else if (!width || !height) {
      ctx.resize({ width: MAX_SIDE });
    }
    const img = await ctx.renderAsync();
    const out = await img.saveAsync({ compress: 0.75, format: SaveFormat.JPEG });
    return { uri: out.uri, mimeType: 'image/jpeg' };
  } catch {
    return { uri, mimeType: 'image/jpeg' };
  }
}
