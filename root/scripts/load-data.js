"use strict";

let e = document.createElement(document.currentScript.getAttribute('elementTag'));
e.innerHTML =  JSON.stringify(data);
e.setAttribute('class', 'data');
document.body.appendChild(e);