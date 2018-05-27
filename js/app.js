/*********************JQUERY SMOOTH SCRCOLL*********************/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(e) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      const hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

/*********************MOBILE DROPDOWN MENU*********************/

document.getElementById('dropdown').addEventListener('click', dropDown);


function dropDown() { 
	document.getElementById('nav-items').classList.toggle('drop');
	document.querySelector('.nav-bar').classList.toggle('expand');
		document.querySelectorAll('.nav-item').forEach((item) => {
			item.addEventListener('click', () => {
				document.getElementById('nav-items').classList.remove('drop');
				document.querySelector('.nav-bar').classList.remove('expand');
			});
	});
}