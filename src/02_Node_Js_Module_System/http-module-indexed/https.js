/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { sendRequest, getResponse } = require("./internals");

function makeRequest(url, data) {
  sendRequest();
  return getResponse();
}

const reqq = makeRequest("https://google.com", "James");
console.log(reqq);
