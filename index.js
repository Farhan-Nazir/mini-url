/* Author: Farhan Nazir */
"use strict";
const validator = require("./urlValidator");
const randomAlphaNumeric = require("./randomAlphaNumeric");
const getHostname = (link) => {
  const originalURL =
    link.includes("http") || link.includes("https") ? link : `http://${link}`;
  const url = new URL(originalURL);
  const protocol = url.protocol;
  const hostname = url.hostname;
  if (link.includes("http") || link.includes("https"))
    return `${protocol}//${hostname}`;
  return hostname;
};

const Url = (url) => {
  if (validator(url)) {
    return {
      shortURL: `${getHostname(url)}/${randomAlphaNumeric()}`,
      originalURL: url,
    };
  } else {
    throw new Error();
  }
};

module.exports = Url;
