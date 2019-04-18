function loadData() {
	let data = { 'legislators': dataLegislators.legislators,
							 'addURL': function() {
								 return function(value, render) {
									 let temp = value.split(' ');
									 
									 return '<a href="' + temp[0] + '">' + render(temp[1]) + '</a>';
								 }
							 },
							 'getChamberTitle': function() {
									return function(value, render) {
										let temp = value.split(' ');
																									
										return render(getChamberTitleByState(temp[0], temp[1]));
									}
								}
						 };
	data.legislators.forEach(x => x.state = getStateName(x.state));
	
  loadTemplate('data/legislators-template.html', data, 'legislators', 'template-legislators');
}

function loadTemplate(url, data, parentID, templateID) {
  $.get(url, template => { applyTemplate(template, data, parentID, templateID); } );
}
  
function applyTemplate(template, data, parentID, templateID) {
	$('#' + parentID).append(Mustache.render($(template).filter('#' + templateID).html(), data));
}

function getArrayObjectByProperty(array, property, value) {
	return array.filter(x => x[property] === value)[0];
}

function getStateName(abbreviation) {console.log(abbreviation);
	return getArrayObjectByProperty(dataStates.states, 'abbreviation', abbreviation).name;
}

function getChamberTitleByState(name, chamber) {
	let obj = getArrayObjectByProperty(dataStates.states, 'name', name);
	console.log(chamber);
	return obj.chambers[chamber].title;
}

loadData();
