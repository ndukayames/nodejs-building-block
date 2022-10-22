const myPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Resolved");
  setTimeout(reject, 100, "Reject");
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(1, err));
