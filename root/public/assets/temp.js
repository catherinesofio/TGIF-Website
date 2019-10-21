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