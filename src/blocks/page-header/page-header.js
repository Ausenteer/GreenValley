
$(document).ready(function(){
  $('#toggler').on('click', function(e){
    e.preventDefault();
    $('#nav-toggler').slideToggle('slow');
  });
});