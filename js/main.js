
(function ($, undefind) {
    
var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
            itemSelector: ".grid-item",
            percentPosition: true,
            columnWidth: '.grid-sizer'
            });
});
    
})(jQuery);

