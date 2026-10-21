/** Google Maps style for dark mode, tuned to the ergo navy palette. */
export const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#0E1A30' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8C9AB4' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0A1428' }] },
  { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#263757' }] },
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#132A24' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1C2B4A' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#14213D' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#263757' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#08203F' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4E6A94' }] },
];

/** Light mode: hide business POIs so task pins stand out. */
export const lightMapStyle = [
  { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
];
