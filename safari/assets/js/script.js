$(document).ready(function () {
  var backButton = '<span class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>';
  var nextButton = '<span class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
     $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: true,
		focusOnSelect: true,
		prevArrow: backButton,
        nextArrow: nextButton
      });
     

// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
  var slidebackButton = '<span class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>';
  var slidenextButton = '<span class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
$('.slick-carousel').slick({
  infinite: true,
  slidesToShow:5, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: true, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  prevArrow: slidebackButton,
  nextArrow: slidenextButton
});	 
	 
var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
	
	var min = Number(input.getAttribute('min'));
	var max = Number(input.getAttribute('max'));
	var step = Number(input.getAttribute('step'));

	function qtyminus(e) {
		var current = Number(input.value);
		var newval = (current - step);
		if(newval < min) {
			newval = min;
		} else if(newval > max) {
			newval = max;
		} 
		input.value = Number(newval);
		e.preventDefault();
	}

	function qtyplus(e) {
		var current = Number(input.value);
		var newval = (current + step);
		if(newval > max) newval = max;
		input.value = Number(newval);
		e.preventDefault();
	}
		
	btnminus.addEventListener('click', qtyminus);
	btnplus.addEventListener('click', qtyplus);
  
}
 });


 