//https://opnsrce.github.io/how-to-load-mustache-js-templates-from-an-external-file-with-jquery
//http://jonnyreeves.co.uk/2012/using-external-templates-with-mustachejs-and-jquery/
function loadData() {
  var template = getTemplate('data/legislators-template.html');
  
  $('#legislators').append(Mustache.render(template, dataLegislators.legislators));
}

function getTemplate(url, id) {
  return $(url).filter(id).html();
}
        
loadData();
