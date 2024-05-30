// Load header and footer
$(document).ready(function(){
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

// JavaScript for the dropdown hover
$(document).ready(function() {
  $('.nav-item.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
  });
});

  