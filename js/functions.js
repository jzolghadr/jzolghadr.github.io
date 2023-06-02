(function($){
    "use strict";
    $(window).on("load", function(){
        document.getElementById("preloader").classList.add("loaded"), 
            setTimeout(function(){
        }, 300);
    });
    $(document).ready(function(){    
        var pageSection = $('.attachment-section');
		pageSection.each(function(){
			if ($(this).attr("data-background")){
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
		});  
        $("h2.intro").scramble(3500, 20, "numbers", false);
        $(".item a").click(function(event) {
              event.preventDefault();
              $("html, body").animate({
                  scrollTop: $($(this).attr("href")).offset().top
                }, 500);
        });
        $('.work-slider').slick({
            dots:true,
            infinite:true,
            slidesToShow:4,
            slidesToScroll:4,
            autoplay:true,
            Speed:1000,
            autoplaySpeed:2000,
            arrows:false,
            responsive:[{
                breakpoint: 1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:true
                    }
                },{
                breakpoint: 767,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    infinite:true
                  }
                },
                {
                breakpoint: 480,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:2,
                    infinite:true
                    }
                }
            ]
        });
    });
})(jQuery);
