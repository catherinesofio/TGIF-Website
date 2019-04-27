const webFrameTriggerClass = "website-frame-trigger";

let container;
let currURL = '';

function initWebFrame() {
	let name = 'website-frame';

	container = document.createElement('div');
	container.setAttribute('id', name);
	container.style.display = 'none';
	document.body.appendChild(container);

	container.onclick = onCloseFrame;

	let frame = document.createElement('iframe');
	frame.setAttribute('name', name);
	container.appendChild(frame);

	frame.onclick = onClickFrame;

	$(webFrameTriggerClass).each(x => {
		console.log(x.title);
		x.setAttribute('target', name);
		x.onclick = onOpenFrame;
	});
}

function onOpenFrame(e) {
	container.style.display = 'inherit';

	currURL = e.target.getAttribute('href');
}

function onCloseFrame(e) {
	container.style.display = 'none';
}

function onClickFrame(e) {
	window.open(currURL);
}

//$(window).on('load', initWebFrame);
