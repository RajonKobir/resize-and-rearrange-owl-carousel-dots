$(document).ready(function(){
    
		  $("#b_slider").owlCarousel({
			items: 1,
			autoplay: true,
			loop:true,
		});
					
    
    
    checkClasses();
    $("#b_slider").on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        var total = $('.owl-carousel .owl-dots .owl-dot').length;
        var active_index = $('.owl-carousel .owl-dots .owl-dot.active').index(); // nested class from activator class
        var last_index= total-1;

        $('.owl-carousel .owl-dots .owl-dot').removeClass('firstActiveItem lastActiveItem'); // nested class from activator class and remove first and last class if already added.

        $('.owl-carousel .owl-dots .owl-dot').each(function(index){ // nested class from activator class
            if (index === active_index-1) {
                // this is the first one
                $(this).addClass('firstActiveItem'); // add class in first item
            }
            if (index === active_index+1) {
                // this is the last one
                $(this).addClass('lastActiveItem'); // add class in last item
            }
            if(active_index===0){
                $('.owl-carousel .owl-dots .owl-dot:eq('+last_index+')').addClass('firstActiveItem');
            }
            if(active_index===total-1){
                $(".owl-carousel .owl-dots .owl-dot:eq(0)").addClass('lastActiveItem');
            }
            
        });
    }
					
			
});
