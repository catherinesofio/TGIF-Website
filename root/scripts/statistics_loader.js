LoadData();

function LoadData() {
  let type = document.currentScript.getAttribute('filter');

  if (type === 'attendance') {
    CreateTables('missed_votes', 0);
  } else {
    CreateTables('total_votes', 1);
  }
}

function SetJObjProperty(url, tableIndex, filterIndex, congressIndex, value) {
  string json = File.ReadAllText(url);
  dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
  jsonObj['table-0' + tableIndex][filterIndex]['data'][congressIndex] = value;
  string output = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj, Newtonsoft.Json.Formatting.Indented);
  File.WriteAllText(url, output);
  obj = value;
}

function CreateTables(property, i) {
  let data = [];
  let d = data_congress.results[0].members;

  let parties = ['D', 'R', 'I'];
  let count = parties.length;

  let temp = [];
  let a = [];
  let b = [];
  let c = [];

  let t = 0;
  let total = d.map(x => x.total_votes).reduce((sum, x) => sum += x);

  for (let i = 0; i < count; i++) {
    a.push(d.filter(x => x.party === parties[i]).length);

    t = d.filter(x => x.party === parties[i]).map(x => x.total_votes).reduce((sum, x) => sum += x, 0);
    b.push((t * 100 / total).toFixed(2) + '%');
  }
  a.push(a[0] + a[1] + a[2]);
  b.push('100%');

  data.push(['Democrats', 'Republicans', 'Independents', 'Total']);
  data.push(a);
  data.push(b);

  let filter = document.currentScript.getAttribute('filter');
  let congress = document.currentScript.getAttribute('congress');

  let f;
  if (filter === 'attendance') {
    f = 0;
  } else {
    f = 1;
  }

  let c;
  if (congress === 'senate') {
    c = 0;
  } else {
    c = 1;
  }

  function SetJObjProperty(data_tables, f, 1, c, data);

  /*data.push(ConvertToTableData(['Democrats', 'Republicans', 'Independents', 'Total']));
  data.push(ConvertToTableData(a));
  data.push(ConvertToTableData(b));

  CreateCongressTable('1', data);

  temp = d.sort(function (a, b) {
    if (a[property] > b[property]) return 1;
    else return -1;
  });
  count = d.length;

  a = [];
  b = [];
  data = [];
  total = d.map(x => x[property]).reduce((sum, x) => sum += x);

  for (let i = 0; i < count; i++) {
    let name = CreateElement('a', null, temp[i].first_name + " " + FilterIfNull(temp[i].middle_name) + " " + FilterIfNull(temp[i].last_name));
    name.href = temp[i].url;
    t = temp[i][property];

    a.push(name);
    b.push(t);
    c.push((t * 100 / total).toFixed(2) + '%');
  }

  data.push(a);
  data.push(ConvertToTableData(b));
  data.push(ConvertToTableData(c));

  CreateCongressTable('2', data);

  a = [];
  data = [];

  for (let i = 0; i < count; i++) {
    let name = CreateElement('a', null, temp[i].first_name + " " + FilterIfNull(temp[i].middle_name) + " " + FilterIfNull(temp[i].last_name));
    name.href = temp[i].url;
    t = temp[i][property];

    a.push(name);
  }

  data.push(a.reverse());
  data.push(ConvertToTableData(b).reverse());
  data.push(ConvertToTableData(c).reverse());

  CreateCongressTable('3', data);*/
}

function CreateCongressTable(index, data) {
  let d;
  let congress = document.currentScript.getAttribute('congress');

  if (congress === 'senate') {
    d = data_tables['table_0' + index][0];
  } else {
    d = data_tables['table_0' + index][1];
  }

  let caption = d.caption;
  caption = caption.replace('*', congress.charAt(0).toUpperCase() + congress.substr(1));

  CreateTable(data, document.getElementById('table-0' + index), d.headers.map(x => x.value), caption, 'table table-responsive table-hover');
}
