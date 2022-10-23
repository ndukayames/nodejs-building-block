/* eslint-disable no-undef */
function encryptData(data) {
  console.log(`encrypting data ...`);
  return `${data} xxx xxxxx x x x  x x x   x  xxxxxx `;
}

function sendRequest(url, data) {
  return encryptData(data);
}

module.exports = {
  sendRequest,
};
