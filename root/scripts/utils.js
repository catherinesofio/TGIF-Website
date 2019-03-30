"use strict";

function FilterIfNull(x) {
  if (x === null) {
    return '';
  } else {
    return x;
  }
}

function CreateElement(eTag, eData = '', eClass = '') {
  let e = document.createElement(eTag);
  e.innerHTML = eData;
  if (eClass != '') {
    e.setAttribute('class', eClass);
  }

  return e;
}

function CreateSelectForm(values, names, parent = document.getElementsByName('form')[0], label = '', onChangeEv = '') {
	parent.appendChild(CreateElement('label'));
	
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

function CreateTable(data, parent = null, headerNames = null, caption = '', eClass = '') {
  let table = CreateElement('table', parent, '', eClass);
  let cols = data.length;
  let rows = data[0].length;

  if (headerNames !== null) {
    let thead = CreateElement('thead', table);
    let tr = CreateElement('tr', thead);
    
    for (let i = 0; i < cols; i++) {
      CreateElement('th', tr, headerNames[i]);
    }
  }

  let tbody = CreateElement('tbody', table);
  for (let i = 0; i < rows; i++) {
    let tr = CreateElement('tr', tbody);

    for (let j = 0; j < cols; j++) {
      let d = data[j][i];
      
      if (d.tagName === 'td') {
        tr.appendChild(td);
      }
      else {
        let td = CreateElement('td', tr);
        td.appendChild(d);
      }
    }
  }

  if (caption != '') {
    CreateElement('caption', table, caption);
  }
  
  return table;
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

function ConvertToTableData(data) {
	let d = [];
	let count = data.length;
	
	for (var i = 0; i < count; i++) {
		d.push(CreateElement('td', data[i]));
	}
	
	return d;
}