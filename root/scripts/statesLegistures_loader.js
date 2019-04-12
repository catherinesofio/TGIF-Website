let app;

loadData();


function loadData() {
	fetchData('https://www.openstates.org/api/v1/metadata/',
          { method: "GET",
            mode: "no-cors",
            headers: { 'X-API-KEY': 'c46279e4-0b4e-4e24-b55e-9e3d85e056a5' } },
          setData);
}

function setData(data) {
	console.log(data);//JSON.stringify(data));
  
  /*app = new Vue({
    el: '#app',
    data: {
    }
  })*/
}
