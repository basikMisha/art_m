export const getRandomPage = (min: number, max: number): number => {
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);
  return min + (randomBuffer[0] % (max - min + 1));
};
