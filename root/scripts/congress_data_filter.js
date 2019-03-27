let checkboxes = [];

Init();

function Init() {
  checkboxes = document.getElementsByName("table-filter");
  checkboxes.forEach(AddCheckboxEvent);
}

function AddCheckboxEvent(x) {
  x.onchange = OnChange;
  
  return x;
}

function OnChange(e) {
  ResetTable();
  
  if (e.target.checked) {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] != e.target) {
        checkboxes[i].checked = false;
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
