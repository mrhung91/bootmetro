(function ($) {
   $.fn.metro = function () {
      // arrange the section container
      var totalWidth = 0;
      $(".metro-sections .metro-section").each(function(index, el){
         totalWidth += $(el).outerWidth(true);
      });
      $(".metro-sections").width(totalWidth);

      // init nicescroll plugin
      var nicesx = $(".metro").niceScroll(".metro .metro-sections",
                                                   {
                                                      touchbehavior: true,
                                                      cursorcolor: "#FF00FF",
                                                      cursoropacitymax: 0.6,
                                                      cursorwidth: 24,
                                                      usetransition: true,
                                                      hwacceleration: true,
                                                      autohidemode: "hidden"
                                                   });


      // if the tiles viewport is wider than the screen than shows the arrow buttons
      //if ( $(".metro").width() < totalWidth ){
      //   $("#tiles-scroll-prev").show();
      //   $("#tiles-scroll-next").show();
      //}


      // Selectable
      var selectables = $(".selectable");
      $.each(selectables, function (i, e) {
         var el = $(this);
         var items = el.children(".metro-image, .metro-image-overlay, .metro-icon-text, .metro-image-text");
         items.bind("click", function () {
            if ($(this).hasClass("disabled")) return;
            $(this).toggleClass("selected");
         })
      })


   }
})(jQuery)