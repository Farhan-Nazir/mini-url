## Minify URL

A simple url shortener service.

### Installation

`npm install --save minify-url`

### Usage

```js
const minifyUrl = require("minify-url");

const longUrl =
  "https://www.google.com/search?q=mini-url+Shortner+npm&oq=mini-url+Shortner+npm&aqs=chrome..69i57.9701j0j9&sourceid=chrome&ie=UTF-8";

minifyUrl(longUrl);

/* 
 {
     shortUrl: "https://www.google.com/Axs145,
     originalUrl: "https://www.google.com/search?q=mini-url+Shortner+npm&oq=mini-url+Shortner+npm&aqs=chrome..69i57.9701j0j9&sourceid=chrome&ie=UTF-8"
 }
*/
```
