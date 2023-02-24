var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = windowHeight;
var plane = document.getElementsByClassName('main-title-img')[0];

var left = plane.offsetLeft;
window.addEventListener('scroll', function() {
	var scrollTop = window.pageYOffset || window.scrollTop;
	var scrollPercent = scrollTop/scrollArea || 0;
	
	plane.style.left = left + scrollPercent*window.innerWidth + 'px';

});