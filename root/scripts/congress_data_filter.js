let filters = ['all', 'all'];
let partyFilters = [];

Init();

function Init() {
	partyFilters = document.getElementsByName("party-filter");
	partyFilters.forEach(AddCheckboxEvent);

	CreateSelectForm(SelectCollectionProperty(data_states.states, 'abbreviation'), SelectCollectionProperty(data_states.states, 'name'), document.getElementById("state-filter"), 'Filter by State:', OnChange);
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
				} else {
					filters[0] = 'all';
				}
			}
		}
	} else {
		filters[1] = e.target.nodeValue;
	}

	ResetTable();

	let data = JSON.parse(JSON.stringify(data_congress));
	if (filters[0] !== 'all') {
		data.results[0].members = FilterCollectionByProperty(data.results[0].members, 'party', filters[0]);
	}

	if (filters[0] !== 'all') {
		data.results[0].members = FilterCollectionByPropertydata.results[0].members(data.results[0].members, 'state', filters[1]);
	}

	CreateCongressTable(data);
}

function ResetTable() {
	let container = document.getElementById('data');
	container.removeChild(container.firstChild);
}
