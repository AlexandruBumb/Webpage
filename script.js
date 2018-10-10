window.addEventListener('load', function() {
	
var isScrolling;
   
window.onscroll = function() {myFunction1()};
window.onresize = function() {myFunction2()};

var header = document.getElementById("header");
var menuItems = document.getElementsByTagName("a");

function myFunction1() {
  window.clearTimeout(isScrolling);
  header.classList.add("transparency");
  isScrolling = setTimeout(function() {
		header.classList.remove("transparency");
	});
}

function myFunction2() {
  var width = window.innerWidth;
  var i;
  if(width < 1000){ 
	for (i = 0; i < menuItems.length; i++) {
		menuItems[i].style.fontSize = "small";
	  }
  }
  else {
	for (i = 0; i < menuItems.length; i++) {
		menuItems[i].style.fontSize = "large";
	  }
  }
}
})
