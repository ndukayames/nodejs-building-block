// eslint-disable-next-line no-undef
const http = require("http");

// http request on nodejs?
const req = http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => console.log(chunk));
  res.on("end", () => {
    console.log("no more data");
  });
});

req.end();
