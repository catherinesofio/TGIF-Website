let app;

loadData();

function loadData() {
  let url = 'https://api.propublica.org/congress/v1/113/' + document.currentScript.getAttribute('congress') + '/members.json';

  fetchJSON(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": "nHu99jpW1f8iZH7VUqO8YwgEYxnkh3oRyXb6mlIJ"
    }
  }, setData);
}

function setData(obj) {
  let dataClone = clone(obj.results[0].members);

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
        this.filteredMembers = clone(this.members);

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
