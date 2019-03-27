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

function CreateSelectForm(values, names, parent = document.getElementsByName('form')[0], label = '', onChangeEv = '') {
	parent.appendChild(CreateData('label'));
	
	let container = document.createElement('select');
  parent.appendChild(container);
	
	if (onChangeEv !== '') {
		container.onchange = onChangeEv;
	}
	
	for (let i = 0; i < values.length; i++) {
		let op = document.createElement('option');
		op.value = values[i];
		op.text = names[i];
		
		container.appendChild(op);
	}
}

function FilterCollectionByProperty(collection, propertyName, value) {
	return collection.filter(x => x[propertyName] === value);
}

function SelectCollectionProperty(collection, propertyName) {
	var temp = [];
	
	for (let i = 0; i < collection.length; i++) {
		temp.push(collection[i][propertyName]);
	}
	
	return temp;
}
