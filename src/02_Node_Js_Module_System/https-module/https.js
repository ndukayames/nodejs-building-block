/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { sendRequest } from "./request.js";
import { getResponse } from "./response.js";

function makeRequest(url, data) {
  const sendAction = sendRequest();
  return getResponse();
}

const reqq = makeRequest("https://google.com", "James");
console.log(reqq);
