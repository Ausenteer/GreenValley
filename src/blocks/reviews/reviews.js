$(document).ready(function(){

var reviewCarousel = $('#reviews-carousel'),
reviewInitTimeCounter;

$(window).on('resize', function(){
clearTimeout(reviewInitTimeCounter);
reviewInitTimeCounter = setTimeout(reviewCarouselTrigger, 100);
});

reviewCarouselTrigger();

function reviewCarouselTrigger() {
if ($('body').outerWidth() >= 1200) {
reviewCarousel.owlCarousel({ items: 2 });
}
else {
reviewCarousel
.trigger('destroy.owl.carousel')
.removeClass('owl-carousel owl-loaded')
.find('.owl-stage-outer')
.children()
.unwrap();
}
}

});