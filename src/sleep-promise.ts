export const sleepPromise = (ms: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms % 2 === 0) {
        resolve();
      } else {
        reject();
      }
    }, ms);
  });
};
