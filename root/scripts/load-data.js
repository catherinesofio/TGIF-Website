"use strict";

let e = document.createElement('div');
e.innerHTML =  JSON.stringify(data);
e.setAttribute('class', 'data');
document.body.appendChild(e);