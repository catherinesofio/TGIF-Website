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
	let table = CreateElement('table', '', 'table table-responsive table-hover');

	document.getElementById('data').appendChild(table);

	let thead = table.appendChild(CreateElement('thead'));
	thead.appendChild(CreateElement('td', 'NAME'));
	thead.appendChild(CreateElement('td', 'PARTY'));
	thead.appendChild(CreateElement('td', 'STATE'));
	thead.appendChild(CreateElement('td', 'SENIORITY'));
	thead.appendChild(CreateElement('td', 'VOTES'));

	let tbody = table.appendChild(CreateElement('tbody'));

	let count = data.results[0].members.length;
	for (var i = 0; i < count; i++) {
		let x = data.results[0].members[i];

		let tr = tbody.appendChild(CreateElement('tr'));

		let name = CreateElement('a', FilterIfNull(x.first_name) + ' ' + FilterIfNull(x.middle_name) + ' ' + FilterIfNull(x.last_name));
		name.setAttribute('href', x.url);

		let tdName = tr.appendChild(CreateElement('td'));
		tdName.appendChild(name);

		tr.appendChild(CreateElement('td', FilterIfNull(x.party)));
		tr.appendChild(CreateElement('td', FilterIfNull(x.state)));
		tr.appendChild(CreateElement('td', FilterIfNull(x.seniority)));
		tr.appendChild(CreateElement('td', FilterIfNull(x.votes_with_party_pct + '%')));
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
