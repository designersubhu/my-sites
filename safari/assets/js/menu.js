/* -------------------------------------------------------------------
 * Plugin Name           : Havestar - Responsive Mega & DropDown Menu
 * Author Name           : Yucel Yilmaz
 * Author URI            : https://codecanyon.net/user/aip_theme3434
 * Created Date          : 01 February 2020
 * Version               : 1.0
 * File Name             : main.js
------------------------------------------------------------------- */

/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Navbar
*/

(function ($) {
  "use strict";

    // Call all ready functions
    havestar_navbar();
    
})(window.jQuery);

/* ------------------------------------------------------------------- */
/* 01.Navbar
/* ------------------------------------------------------------------- */
function havestar_navbar() {
    "use-strict";

  // Variables
  let header              = $('.header'),
      logoTransparent     = $(".logo-transparent"),
      scrollTopBtn        = $(".scroll-top-btn"),
      logoNormal          = $(".logo-normal"),
      windowWidth         = $(window).innerWidth(),
      scrollTop           = $(window).scrollTop(),
      $dropdown           = $(".dropdown"),
      $dropdownToggle     = $(".dropdown-toggle"),
      $dropdownMenu       = $(".dropdown-menu"),
      showClass           = "show";

  // When Window On Scroll
  $(window).on('scroll',function(){
      let scrollTop       = $(this).scrollTop();

      if(scrollTop > 100 ) {
          header.addClass('header-shrink');
          scrollTopBtn.addClass('active');
          logoTransparent.hide();
          logoNormal.show();
      }else {
          header.removeClass('header-shrink');
          scrollTopBtn.removeClass('active');
          logoTransparent.show();
          logoNormal.hide();
      }
  });

  // The same process is done without page scroll to prevent errors.
  if(scrollTop > 100 ) {
      header.addClass('header-shrink');
      scrollTopBtn.addClass('active');
      logoTransparent.hide();
      logoNormal.show();
  }else {
      header.removeClass('header-shrink');
      scrollTopBtn.removeClass('active');
      logoTransparent.show();
      logoNormal.hide();
  }

  // Window On Resize Hover Dropdown
  $(window).on("resize", function() {
      let windowWidth  = $(this).innerWidth();

      if ( windowWidth > 991 ) {
          $dropdown.hover(
              function() {
                  let hasShowClass  =  $(this).hasClass(showClass);
                  if( hasShowClass!==true ){
                      $(this).addClass(showClass);
                      $(this).find($dropdownToggle).attr("aria-expanded", "true");
                      $(this).find($dropdownMenu).addClass(showClass);
                  }
              },
              function() {
                  $(this).removeClass(showClass);
                  $(this).find($dropdownToggle).attr("aria-expanded", "false");
                  $(this).find($dropdownMenu).removeClass(showClass);
              }
          );
      }else {
          $dropdown.off("mouseenter mouseleave");
          header.find('.main-menu').collapse('hide');
      }
  });
  // The same process is done without page scroll to prevent errors.
  if (windowWidth > 991 ) {
      $dropdown.hover(
          function() {
              const $this = $(this);

              var hasShowClass  = $this.hasClass(showClass);

              if(hasShowClass!==true){
                  $this.addClass(showClass);
                  $this.find($dropdownToggle).attr("aria-expanded", "true");
                  $this.find($dropdownMenu).addClass(showClass);
              }
          },
          function() {
              const $this = $(this);
              $this.removeClass(showClass);
              $this.find($dropdownToggle).attr("aria-expanded", "false");
              $this.find($dropdownMenu).removeClass(showClass);
          }
      );
  }else {
      $dropdown.off("mouseenter mouseleave");
  }
}