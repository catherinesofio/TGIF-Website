let partyFilters = [];
let stateFilter = document.getElementById("state-filter");

Init();

function Init() {
  partyFilters = document.getElementsByName("party-filter");
  partyFilters.forEach(AddCheckboxEvent);
  
  for (let i = 0; i < data_states.length; i++) {
    let state = stateFilter.states[i];
    
    CreateFormOption(state.abbreviation, state.name, stateFilter);
  }
}

function AddCheckboxEvent(x) {
  x.onchange = OnChange;
  
  return x;
}

function OnChange(e) {
  ResetTable();
  
  if (e.target.checked) {
    for (let i = 0; i < partyFilters.length; i++) {
      if (partyFilters[i] != e.target) {
        partyFilters[i].checked = false;
      }
    }
    CreateFilteredCongressTable(data_congress, e.target.value);
  } else {
    CreateCongressTable(data_congress);
  }
}

function ResetTable() {
  let container = document.getElementById('data');
  container.removeChild(container.firstChild);
}

function CreateFilteredCongressTable(data, party) {
  let d = JSON.parse(JSON.stringify(data));
  d.results[0].members = data.results[0].members.filter(x => x.party === party);
  
  CreateCongressTable(d);
  
  return ;
}
