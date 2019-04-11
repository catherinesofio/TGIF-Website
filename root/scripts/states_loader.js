LoadData();

function LoadData() {
	FetchJSON('https://data.openstates.org/metadata', { method: 'GET', mode: 'cors', headers: { 'X-API-KEY': 'c46279e4-0b4e-4e24-b55e-9e3d85e056a5' } }, SetData);
}

function SetData(data) {
	console.log(JSON.stringify(data));
}