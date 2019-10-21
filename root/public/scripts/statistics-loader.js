let app;

loadData();

function loadData() {
  let congress = document.currentScript.getAttribute('congress');
  let d = dataStatistics;

  let page;
  if (document.currentScript.getAttribute('page') === 'attendance') {
    page = 0;
  } else {
    page = 1;
  }

  app = new Vue({
    el: '#app',
    data: {
      table01: {
        caption: d.table_01[page].caption.replace('*', congress.charAt(0).toUpperCase() + congress.substr(1)),
        headers: d.table_01[page].headers,
        columns: appendMatrixData([
                  d.table_01[page].data[congress][0],
                  d.table_01[page].data[congress][1],
                  d.table_01[page].data[congress][2]
                ])
      },
      table02: {
        caption: d.table_02[page].caption.replace('*', congress.charAt(0).toUpperCase() + congress.substr(1)),
        headers: d.table_02[page].headers,
        representatives: createCongressTableObjs(
          d.table_02[page].data[congress][0],
          d.table_02[page].data[congress][1],
          [
            d.table_02[page].data[congress][2],
            d.table_02[page].data[congress][3]
          ])
      },
      table03: {
        caption: d.table_03[page].caption.replace('*', congress.charAt(0).toUpperCase() + congress.substr(1)),
        headers: d.table_03[page].headers,
        representatives: createCongressTableObjs(
          d.table_03[page].data[congress][0],
          d.table_03[page].data[congress][1],
          [
            d.table_03[page].data[congress][2],
            d.table_03[page].data[congress][3]
          ])
      }
    }
  })
}

function appendMatrixData(data) {
  let cols = data[0].length;
  let rows = data.length;
  let x = [];

  for (var i = 0; i < cols; i++) {
    x.push([]);

    for (var j = 0; j < rows; j++) {
      x[i].push(data[j][i]);
    }
  }

  return x;
}

function createCongressTableObjs(names, links, data) {
  data = appendMatrixData(data);
  let count = data.length;
  let x = [];

  for (let i = 0; i < count; i++) {
    x.push([]);

    x[i] = {
      name: names[i],
      link: links[i],
      data: data[i]
    };
  }

  return x;
}
