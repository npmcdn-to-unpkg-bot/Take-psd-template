
(function ($, undefind) {

//    // Height detection
//    function heightDetect() {
//        $(".section-head, .section-head-container").css("height", $(window).height());
//    };
//    heightDetect();
//    $(window).resize(function() {
//        heightDetect();
//    });
    
    // Grid-box
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

