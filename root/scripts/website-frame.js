const webFrameTriggerClass = 'frame-trigger';

let container;
let currURL = '';

function initWebFrame() {
  let containerName = 'frame-container';
  let previewName = 'frame-preview';

  container = document.createElement('div');
  container.id = containerName;
  container.style.display = 'none';
  document.body.insertBefore(container, document.getElementsByTagName('header')[0]);

  container.onclick = onCloseFrame;

  let frame = document.createElement('iframe');
  frame.setAttribute('name', previewName);
  frame.setAttribute('align', 'middle');
  container.appendChild(frame);

  frame.onclick = onClickFrame;

  setWebFrameURLs();
}

function setWebFrameURLs() {
  let previewName = 'frame-preview';

  let urls = Array.from(document.getElementsByClassName(webFrameTriggerClass));

  for (let i = urls.length - 1; i >= 0; i--) {
    urls[i].setAttribute('target', previewName);
    urls[i].onclick = onOpenFrame;
  }
}

function onOpenFrame(e) {
  currURL = e.target.getAttribute('href');

  container.style.display = 'inherit';
}

function onCloseFrame(e) {
  container.style.display = 'none';
}

function onClickFrame(e) {
  window.open(currURL);
}

window.onload = initWebFrame;
