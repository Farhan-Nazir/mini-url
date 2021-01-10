"use strict";
const urlValidator = (link) => {
  const validationHttp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  const validationUrl = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  const regexHTTP = new RegExp(validationHttp);
  const regexUrl = new RegExp(validationUrl);
  return link.match(regexHTTP) || link.match(regexUrl) ? true : false;
};

module.exports = urlValidator;
