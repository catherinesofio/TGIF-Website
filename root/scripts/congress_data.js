let filters = ['all', 'all'];
let partyFilters = [];

ResetValues();
CreateCongressTable(data_congress);

function ResetValues() {
	partyFilters = document.getElementsByName("party-filter");
	partyFilters.forEach(AddCheckboxEvent);

	CreateSelectForm(SelectCollectionProperty(data_states.states, 'abbreviation'), SelectCollectionProperty(data_states.states, 'name'), document.getElementById("state-filter"), 'Filter by State:', OnChange);
}

function CreateCongressTable(data) {
	let table = CreateElement('table', document.getElementById('data'), '', 'table table-responsive table-hover');

	let thead = CreateElement('thead', table);
	CreateElement('td', thead, 'NAME');
	CreateElement('td', thead, 'PARTY');
	CreateElement('td', thead, 'STATE');
	CreateElement('td', thead, 'SENIORITY');
	CreateElement('td', thead, 'VOTES');

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
}
