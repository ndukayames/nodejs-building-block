let urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/user",
  "https://jsonplaceholder.typicode.com/use",
];

const getUrls = (urlList) => {
  for (const url of urlList) {
    console.log(url);
  }
};

getUrls(urls);
