function loadData() {
  let state = document.currentScript.getAttribute('state');
  let legislators = (state === 'ALL') ? dataLegislators.legislators : dataLegislators.legislators.filter(x => x.state === state);

  let data = {
    'legislators': legislators,
    'nameWithURL': function () {
      return '<a class="iframe" href="' + this.url + '">' + this.name + '</a>';
    },
    'chamberTitle': function () {
      return getChamberTitleByState(this.state, this.chamber);
    }
  };
  data.legislators.forEach(x => x.state = getStateName(x.state));
  loadTemplate('data/legislators-template.html', data, 'legislators', 'template-legislators');

  $('a.iframe').colorbox();//each(x => x.addEventListener('click', (function (e) { e.preventDefault(); $.colorbox({href: this.href, iframe: true}); console.log('oli'); })));
}

function loadTemplate(url, data, parentID, templateID) {
  $.get(url, template => {
    applyTemplate(template, data, parentID, templateID);
  });
}

function applyTemplate(template, data, parentID, templateID) {
  $('#' + parentID).append(Mustache.render($(template).filter('#' + templateID).html(), data));
}

function getArrayObjectByProperty(array, property, value) {
  return array.filter(x => x[property] === value)[0];
}

function getStateName(abbreviation) {
  return getArrayObjectByProperty(dataStates.states, 'abbreviation', abbreviation).name;
}

function getChamberTitleByState(name, chamber) {
  let obj = getArrayObjectByProperty(dataStates.states, 'name', name);
  return obj.chambers[chamber].title;
}

loadData();
