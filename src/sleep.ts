type Cb = () => void;
export const sleep = (ms: number, cb: Cb): void => {
  setTimeout(cb, ms);
};
