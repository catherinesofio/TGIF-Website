let app;

LoadData();

function LoadData() {
  let url = 'https://api.propublica.org/congress/v1/113/' + document.currentScript.getAttribute('congress') + '/members.json';
  
  FetchJSON(url, { method: "GET", mode: "cors", headers: { "X-API-Key": "nHu99jpW1f8iZH7VUqO8YwgEYxnkh3oRyXb6mlIJ" } }, SetData);
}

function SetData(obj) {
  let dataClone = Clone(obj.results[0].members);
  
  app = new Vue({
    el: '#app',
    data: {
      members: obj.results[0].members,
      filteredMembers: dataClone,
      states: data_states.states,
      partyFilter: 'ALL',
      stateFilter: 'ALL'
		},
    methods: {
      applyFilters: function () {
        this.filteredMembers = Clone(this.members);
        
        if (this.partyFilter !== 'ALL') {
          this.filteredMembers = this.filteredMembers.filter(x => x['party'] === this.partyFilter);
        }
        
        if (this.stateFilter !== 'ALL') {
          this.filteredMembers = this.filteredMembers.filter(x => x['state'] === this.stateFilter);
        }
      }
    }
  })
}

/*function ResetValues(data) {
  data_congress = data;
  
  partyFilters = document.getElementsByName("party-filter");
  partyFilters.forEach(AddCheckboxEvent);

  CreateSelectForm(SelectCollectionProperty(data_states.states, 'abbreviation'), SelectCollectionProperty(data_states.states, 'name'), document.getElementById("state-filter"), 'Filter by State:', OnChange);

  CreateCongressTable(Clone(data_congress));
}

function CreateCongressTable(data) {
  let table = CreateElement('table', document.getElementById('data'), '', 'table table-responsive table-hover');

  let thead = CreateElement('thead', table);
  let row = CreateElement('tr', thead);
  CreateElement('th', row, 'NAME');
  CreateElement('th', row, 'PARTY');
  CreateElement('th', row, 'STATE');
  CreateElement('th', row, 'SENIORITY');
  CreateElement('th', row, 'VOTES');

  let tbody = CreateElement('tbody', table);

  let count = data.results[0].members.length;
  for (var i = 0; i < count; i++) {
    let x = data.results[0].members[i];

    let tr = CreateElement('tr', tbody);

    let tdName = CreateElement('td', tr);

    let name = CreateElement('a', tdName, FilterIfNull(x.first_name) + ' ' + FilterIfNull(x.middle_name) + ' ' + FilterIfNull(x.last_name));
    name.setAttribute('href', x.url);

    CreateElement('td', tr, FilterIfNull(x.party));
    CreateElement('td', tr, FilterIfNull(x.state));
    CreateElement('td', tr, FilterIfNull(x.seniority));
    CreateElement('td', tr, FilterIfNull(x.votes_with_party_pct + '%'));
  }
}

function AddCheckboxEvent(x) {
  x.onchange = OnChange;

  return x;
}

function OnChange(e) {
  if (event.target.getAttribute('name') === 'party-filter') {
    if (e.target.checked) {
      filters[0] = e.target.value;

      for (let i = 0; i < partyFilters.length; i++) {
        if (partyFilters[i] != e.target) {
          partyFilters[i].checked = false;
        }
      }
    } else {
      filters[0] = 'all';
    }
  } else {
    filters[1] = e.target.value;
  }
console.log('ke pasa wey');
  ResetTable();

  let data = JSON.parse(JSON.stringify(data_congress));
  if (filters[0] !== 'all') {
    data.results[0].members = FilterCollectionByProperty(data.results[0].members, 'party', filters[0]);
  }

  if (filters[1] !== 'all') {
    data.results[0].members = FilterCollectionByProperty(data.results[0].members, 'state', filters[1]);
  }

  CreateCongressTable(data);
}

function ResetTable() {
  let container = document.getElementById('data');
  container.removeChild(container.firstChild);
}*/
