CreateCongressTable(data_congress);

function CreateCongressTable(data) {
  let table = CreateData('table', '', 'table table-responsive table-hover');

  document.getElementById('data').appendChild(table);

  let thead = table.appendChild(CreateData('thead'));
  thead.appendChild(CreateData('td', 'NAME'));
  thead.appendChild(CreateData('td', 'PARTY'));
  thead.appendChild(CreateData('td', 'STATE'));
  thead.appendChild(CreateData('td', 'SENIORITY'));
  thead.appendChild(CreateData('td', 'VOTES'));

  let tbody = table.appendChild(CreateData('tbody'));

  let count = data.results[0].members.length;
  for (var i = 0; i < count; i++) {
    let x = data.results[0].members[i];

    let tr = tbody.appendChild(CreateData('tr'));

    let name = CreateData('a', FilterIfNull(x.first_name) + ' ' + FilterIfNull(x.middle_name) + ' ' + FilterIfNull(x.last_name));
    name.setAttribute('href', x.url);

    let tdName = tr.appendChild(CreateData('td'));
    tdName.appendChild(name);

    tr.appendChild(CreateData('td', FilterIfNull(x.party)));
    tr.appendChild(CreateData('td', FilterIfNull(x.state)));
    tr.appendChild(CreateData('td', FilterIfNull(x.seniority)));
    tr.appendChild(CreateData('td', FilterIfNull(x.votes_with_party_pct + '%')));
  }
}
