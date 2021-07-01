// Close Navbar when clicked outside
$(window).on('click', function(event){
    // element over which click was made
    var clickOver = $(event.target)
    if ($('.navbar .navbar-toggler').attr('aria-expanded') == 'true' && clickOver.closest('.navbar').length === 0) {
        // Click on navbar toggler button
        $('button[aria-expanded="true"]').click();
    }
    
});
console.log("Js imported")

//------Change navbar bg color-------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 10){
        $('.navbar').css('background-color', 'transparent');
        $('.nav-link h5').css('color', 'white');
        $('#logotext1').css('color', 'white');
        $('#logotext2').css('color', 'white');
        
    } else{
        $('.navbar').css('background-color', 'white');
        $('.nav-link h5').css('color', 'black');
        $('#logotext1').css('color', 'black');
        $('#logotext2').css('color', 'black');

    }
});

 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

  // Accordion - on single service page
  $('.accordion-title').on('click', function() {
    $(this).parent().toggleClass('opened');
  });

let acc = document.querySelectorAll('.accrodion');
var i;
for(i=0;i<acc.length;i++){
  acc[i].addEventListener('click', function(){
    var previousItem = document.querySelector('.active');
    var activeItem = this.parentNode;
    activeItem.classList.toggle('active');
    previousItem.classList.remove('active');
  });
};