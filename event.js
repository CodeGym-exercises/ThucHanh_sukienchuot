let img = null;
function init(){
	img = document.getElementById('myimg');
	img.style.position = "relative";
	img.style.transition = "0.5s";
	img.style.left = '0px';
}
function moveRight(){
	img.style.left = parseInt(img.style.left) + 250 + 'px';
}
window.onload = init;
