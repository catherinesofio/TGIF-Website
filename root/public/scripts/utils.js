"use strict";

function clone(x) {
  return JSON.parse(JSON.stringify(x));
}

function fetchData(url, init = {}, OnLoad) {
  fetch(url, init).then(function (data) {
    OnLoad(data);
  })
}

function fetchJSON(url, init = {}, OnLoad) {
  fetch(url, init).then(response => response.json()).then(function (json) {
    OnLoad(json);
  });
}
