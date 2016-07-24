var hideItem = $('.house-type'),
activeSelect = $('#flagman'),
firstShow = $('#house-type--flagman');

hideItem.hide();
firstShow.show();
activeSelect.attr('checked', 'checked');

$('.cottage__choise').on('click', function(){
var forData = $(this).attr('for'),
showItem = '#house-type--'+forData;

$(hideItem).hide();
$(showItem).show();
});