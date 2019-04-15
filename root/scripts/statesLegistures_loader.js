let app;

function loadData(data) {
	app = new Vue({
		el: '#app',
		data: {
			legislators: legislatorsData.legislators,
			states: data_states.states
		},
		methods: {
			getChamber: function (legislator) {
				return this.states[this.states.indexOf(legislator.state)].chambers[legislator.chamber].name;
			},
			getChamberTitle: function (legislator) {
				return this.states[this.states.indexOf(legislator.state)].chambers[legislator.chamber].title;
			}
		}
	});
}

loadData();
