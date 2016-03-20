
(function ($, undefind) {

    $(".grid-item").addClass(".animated .rotateIn");
    
    var $container = $(".masonry-container");
        $container.imagesLoaded(function () {
            $container.masonry({
                itemSelector: ".grid-item",
                percentPosition: true,
                columnWidth: '.grid-item'
                });
            
    });
    

    
})(jQuery);

