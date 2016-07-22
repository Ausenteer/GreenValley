$(document).ready(function(){

var offersCarousel = $('#rooms-preview-slider'),
reviewInitTimeCounter;

offersCarousel.owlCarousel({ items: 2});

$(window).on('resize', function(){
clearTimeout(reviewInitTimeCounter);
reviewInitTimeCounter = setTimeout(reviewCarouselTrigger, 100);
});

reviewCarouselTrigger();

function reviewCarouselTrigger() {
if ($('body').outerWidth() >= 1200) {
reviewCarousel
.trigger('destroy.owl.carousel')
.removeClass('owl-carousel owl-loaded')
.find('.owl-stage-outer')
.children()
.unwrap();
}
else {
reviewCarousel.owlCarousel({items: 2, });
}
}

});