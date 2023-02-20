var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3001/Build/harder.data', xhr.responseType = "arraybuffer", true);
xhr.onload = () => {
  console.log(xhr.response); // http://example.com/test
};
xhr.send(null);