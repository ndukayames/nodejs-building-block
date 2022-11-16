const axios = require("axios");

axios
  .get("https://www.wikipedia.org")
  .then((res) => {
    console.log(res);
    return res;
  })
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {
    console.log(1, res);
  });
