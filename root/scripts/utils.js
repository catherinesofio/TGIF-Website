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

function CreateFormOption(value, name, parent = document.body) {
  let e = CreateData('option');
  e.value = value;
  e.appendChild(document.createTextNode(name));
  
  parent.appendChild(e);
}