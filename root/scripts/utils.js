"use strict";

function FilterIfNull(x) {
  if (x === null) {
    return '';
  } else {
    return x;
  }
}

function CreateData(eTag, eData = '', eClass = '') {
  let e = document.createElement(eTag);
  e.innerHTML = eData;
  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}
