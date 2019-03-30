let congress = document.currentScript.getAttribute('congress');

LoadData();

function LoadData()
{
	let type = document.currentScript.getAttribute('filter');
	
	let data = [];
	let d = data_congress.results[0].members;
	
	if (type === 'attendance') {
		data = [ConvertToTableData(['Democrats', 'Republicans', 'Independents', 'Total']),
						ConvertToTableData(GetRepresentativesByParty(d, ['D','R', 'I', 'all'])),
						ConvertToTableData(GetVotesPerParty(d, ['D','R', 'I', 'all']))];
		
		CreateCongressTable('1', data);
	}
}

function CreateCongressTable(index, data) {
	let d;
	if (congress === 'senate') {
		d = data_tables['table_0' + index][0];
	} else {
		d = data_tables['table_0' + index][1];
	}
	
	let parent = document.getElementById('table-0' + index);
	
	let caption = d.caption;
	caption.replace('*', congress);
	
	CreateTable(data, parent, d.headers.filter(x => x.value), caption, 'table table-responsive table-hover');
}

function GetRepresentativesByParty(d, parties) {
	d = SelectCollectionProperty(d, 'party');
	let data = [];
	let count = parties.length;
	
	for (let i = 0; i < count; i++) {
		data.push(d.filter(x => x === parties[i]));
	}
	
	return data;
}

function GetVotesPerParty(d, parties) {
	let data = [];
	let count = parties.length;
	
	for (let i = 0; i < count; i++) {
		let x = FilterCollectionByProperty(d, 'party', parties[i]);
		let sum = 0;
		
		for (let j = x.length - 1; j >= 0; j--) {
			sum += x[j];
		}
		
		data.push(sum);
	}
	
	return data;
}