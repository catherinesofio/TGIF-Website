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

	let urls = document.getElementsByClassName(webFrameTriggerClass);
	console.log(document.getElementsByClassName(webFrameTriggerClass));
	console.log(urls.length);
	for (let i = urls.length - 1; i >= 0; i--) {
		console.log(urls[i].title);
		urls[i].setAttribute('target', name);
		urls[i].onclick = onOpenFrame;
	}
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

window.onload = initWebFrame;
//document.addEventListener("DOMContentLoaded", function(e) { initWebFrame; });
//$(document).ready(initWebFrame);
//$(window).on('load', initWebFrame);
