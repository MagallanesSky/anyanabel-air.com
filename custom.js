$(function(){
  $(".tabs a").click(function(){
    $(".tabs li").removeClass("active");
    $(this).parent().addClass("active");

    let currentTab = $(this).attr('href');
    $(".tabs-content > div").hide();
    $(currentTab).show();

    return false;
  });
});


$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
        
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
        
            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
              // openerElement is the element on which popup was initialized, in this case its <a> tag
              // you don't need to add "opener" option if this code matches your needs, it's defailt one.
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }
    });
});


//menu sticky
$(window).bind("scroll", function(){
  var gap = 50;
  if($(window).scrollTop() > gap){
    $("nav").addClass("stick");
  } else{
    $("nav").removeClass("stick");
  }
});


//Toggle Menu
$(".toggle").on("click", function(){
  if($(".menu").hasClass("active")){
    $(".menu").removeClass("active");
    $(this).find(".toggle-icon").html("<ion-icon name='menu-outline'></ion-icon>");
  } else{
    $(".menu").addClass("active");
    $(this).find(".toggle-icon").html("<ion-icon name='close-outline'></ion-icon>");
    }
});