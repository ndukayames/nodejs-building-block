// create setTimeout
setTimeout(() => {
  console.log(1);
}, 10);
setTimeout(() => {
  console.log(2);
}, 10000000000);

Promise.resolve(3).then((res) => {
  setTimeout(() => {
    console.log(res);
  }, 101);
});

console.log(4);
