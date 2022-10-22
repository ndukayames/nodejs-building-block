// eslint-disable-next-line no-unused-vars
const myPromise = new Promise((resolve, reject) => {
  resolve(234);
});

const myPromise2 = new Promise((resolve, reject) => {
  reject(123);
});

const prom = Promise.all([myPromise, myPromise2]);

console.log(prom);
