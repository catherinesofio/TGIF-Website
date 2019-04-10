let app;

LoadData();

function LoadData() {
  let congress = document.currentScript.getAttribute('congress');
  let d = data_tables;

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
        columns: AppendMatrixData([
                  d.table_01[page].data[congress][0],
                  d.table_01[page].data[congress][1],
                  d.table_01[page].data[congress][2]
                ])
      },
      table02: {
        caption: d.table_02[page].caption.replace('*', congress.charAt(0).toUpperCase() + congress.substr(1)),
        headers: d.table_02[page].headers,
        representatives: CreateCongressTableObjs(
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
        representatives: CreateCongressTableObjs(
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

function CreateCongressTableObjs(names, links, data) {
  data = AppendMatrixData(data);
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

function AppendMatrixData(data) {
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


/*CreateCongressTables();

function CreateCongressTables() {
  let page;
  if (document.currentScript.getAttribute('page') === 'attendance') {
    page = 0;
  } else {
    page = 1;
  }
  
  CreateCongressTable(1, page);
  CreateCongressTable(2, page, true);
  CreateCongressTable(3, page, true);
}

function CreateCongressTable(tableIndex, page, addLinks = false) {
  let congress = document.currentScript.getAttribute('congress');
  
  let tableData = data_tables['table_0' + tableIndex][page];
  
  let data = tableData.data[congress];
  if (!addLinks) {
    data = data.map(x => { return ConvertToTableData(x)});
  } else {
    let temp = [];
    temp.push(data.shift());
    temp.push(data.shift());
    
    data = data.map(x => { return ConvertToTableData(x)});
    data.unshift(CreateAnchorElements(temp[0], temp[1]));
  }

  let caption = tableData.caption;
  caption = caption.replace('*', congress.charAt(0).toUpperCase() + congress.substr(1));
  
  CreateTable(data, document.getElementById('table-0' + tableIndex), tableData.headers, caption, 'table table-responsive table-hover');
}*/


// USE ONLY TO CALCULATE THE STATISTICS

// property = missed_votes => 1st table
//          = total_votes  => 2nd and 3rd table

// i = 0 => attendance page
//   = 1 => party-loyalty page
function CalculateStatistics(property, i) {
  let members = data_congress.results[0].members;

  let parties = ['D', 'R', 'I'];
  let count = parties.length;

  let temp = [];
  let a = [];
  let b = [];
  let c = [];
  let d = [];

  let t = 0;
  let total = members.map(x => x.total_votes).reduce((sum, x) => sum += x);

  for (let i = 0; i < count; i++) {
    a.push(members.filter(x => x.party === parties[i]).length);

    t = members.filter(x => x.party === parties[i]).map(x => x.total_votes).reduce((sum, x) => sum += x, 0);
    b.push((t * 100 / total).toFixed(2) + '%');
  }
  a.push(a[0] + a[1] + a[2]);
  b.push('100%');

  let data = [];
  data.push(['Democrats', 'Republicans', 'Independents', 'Total']);
  data.push(a);
  data.push(b);

  //console.log(JSON.stringify(data));

  temp = members.sort(function (a, b) {
    if (a[property] > b[property]) return 1;
    else return -1;
  });
  count = members.length;

  a = [];
  b = [];
  total = members.map(x => x[property]).reduce((sum, x) => sum += x);

  for (let i = 0; i < count; i++) {
    a.push(temp[i].first_name + " " + FilterIfNull(temp[i].middle_name) + " " + FilterIfNull(temp[i].last_name));
    b.push(temp[i].url);
    c.push(temp[i][property]);
    d.push((t * 100 / total).toFixed(2) + '%');
  }

  data = [];
  data.push(a);
  data.push(b);
  data.push(c);
  data.push(d);

  //console.log(JSON.stringify(data));

  data = [];
  data.push(a.reverse());
  data.push(b.reverse());
  data.push(c.reverse());
  data.push(d.reverse());

  //console.log(JSON.stringify(data));
}
