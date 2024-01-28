export function getRandomCoordinates() {
  // Generate random latitude between 30-45 and -30 - -45
  const latitude = Math.random() * 60 - 30;

  // Generate random longitude between -90 and 90
  const longitude = Math.random() * 180 - 90;

  return { latitude, longitude };
}
