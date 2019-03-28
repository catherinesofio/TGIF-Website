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

function CreateTableFromObjArray(data, propertiesName, headerNames, caption = '', eClass = '', parent = document.body) {
	let table = CreateData('table', '', eClass);
	let length = propertiesName.length;
	let width = data.length;
	
	let theader = table.appendChild(CreateData('theader'));
	for(let i = 0; i < length; i++) {
		theader.appendChild(CreateData('td', headerNames[i]));
	}
	
	let tbody = table.appendChild(createData('tbody'));
	for(let i = 0; i < width; i++) {
		let tr = CreateData('tr');
		tbody.appendChild(tr);
		
		for(let j = 0; j < length; j++) {
			tr.appendChild(CreateData(data[i][propertiesName[j]]));
		}
	}
	
	table.createCaption();
	table.innerHTML = caption;
	
	parent.appendChild(table);
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
