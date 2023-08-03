import { sleepPromise } from './sleep-promise';

export const listaLongaDeSleeps = (): Promise<void> => {
  return sleepPromise(1000)
    .then(() => {
      console.log('sleep 1s');
      return sleepPromise(2000);
    })
    .then(() => {
      console.log('sleep 2s');
      return sleepPromise(3000);
    })
    .then(() => {
      console.log('sleep 3s');
      return sleepPromise(4001);
    })
    .then(() => {
      console.log('sleep 4s');
    });
};
