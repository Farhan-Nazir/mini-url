## Mini URL

A simple url shortener.

### Installation

`npm install --save mini-url`

### Usage

```js
const miniUrl = require("mini-url");

const longUrl =
  "https://www.google.com/search?q=mini-url+Shortner+npm&oq=mini-url+Shortner+npm&aqs=chrome..69i57.9701j0j9&sourceid=chrome&ie=UTF-8";

miniUrl.Url(longUrl);

/* 
 {
     shortUrl: "https://www.google.com/Axs145,
     originalUrl: "https://www.google.com/search?q=mini-url+Shortner+npm&oq=mini-url+Shortner+npm&aqs=chrome..69i57.9701j0j9&sourceid=chrome&ie=UTF-8"
 }
*/
```
