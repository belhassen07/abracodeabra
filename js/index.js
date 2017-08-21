//nav bar slide 
function change(_this){
   
  _this.toggleClass("fa-times").toggleClass("rotate").toggleClass("fa-bars");

  if(_this.hasClass("fa-bars")){
      _this.addClass("scale");
      $("body").css({
        overflow: 'auto'
      });
  }
  else  {
      _this.removeClass("scale");
      $("body").css({
        overflow: 'hidden'
      });
  }
  
  
  $("fa-bars").toggle(200);
  $("fa-times").toggle(200);
  $(".nav-items").toggleClass("slider");
};

$(".fa-bars, .fa-times").click(function(){
  var _this = $(this);
change(_this);
});




$(".basics-ref").click(function(ev){

  if($(".web-basics").length){

    ev.preventDefault();
    change($(".fa-bars, .fa-times"));
    $("html, body").animate({
    scrollTop: $(".web-basics").offset().top
  },500);
  }
  
});
$(".nav-items a:nth-of-type(3)").click(function(ev){

  if($(".tools").length){
    ev.preventDefault();
    change($(".fa-bars, .fa-times"));
    $("html, body").animate({
    scrollTop: $(".tools").offset().top
  },700);
  }
 });



/*activating the avatar*/
$(window).scroll(function(){
  if($("body").scrollTop()> ($(window).height()/10) ){

    $(".avatar").addClass('avatar_translate');
       $(".avatar").addClass("avatar_active");
       $(".pf-first").addClass('radial-bg');
       $(".pf-first h2").fadeOut(600);
       document.querySelector("audio").play()
  }

  else{
    $(".avatar").removeClass("avatar_translate").removeClass("avatar_active");
    $(".pf-first h2").fadeIn(1000);
    $(".pf-first").removeClass('radial-bg');

  }
});


