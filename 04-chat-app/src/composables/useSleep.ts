export const useSleep = (secondsToWait: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), secondsToWait * 1000));
