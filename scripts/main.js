// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top
        },
        1000,
        function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(':focus')) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        }
      );
    }
  }
});

// Light Box
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Scroll Top
$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#scrolltop').click(function () {
    $('html,body').animate({ scrollTop: $('#top').offset().top }, '1000');
    return false;
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    $('#scrolltop').stop(true, true).fadeOut();
  }
});

function close_menu_mob() {
  var element_li = document.getElementById('da-navbarNav');
  element_li.classList.remove('show');
}




