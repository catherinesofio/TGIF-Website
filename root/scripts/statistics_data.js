let congress = document.currentScript.getAttribute('Senate');

LoadData();

function LoadData()
{
	let i = '0' + document.currentScript.getAttribute('table-index');
	let caption = data_statistics.table_01.['0' + table_index].caption;
	caption.replace('*', congress);
	let eClass = 'table table-responsive table-hover';
									
	CreateTableFromObjArray(, data_statistics.table_01.[i].headers, caption, eClass, document.getElementById('table-2'));
	CreateTableFromObjArray(, data_statistics.table_01.[i].headers, data_statistics.table_02.[i].caption, eClass, document.getElementById('table-2'));
	CreateTableFromObjArray(, data_statistics.table_01.[i].headers, data_statistics.table_03.[i].caption, eClass, document.getElementById('table-3'));
}