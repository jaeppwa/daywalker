var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3','section4','section5','section6','section7'],
    sectionsColor: ['#000', '#fff', '#000','#fff','#fff','#fff','#000'],
    // 기본 설정 autoScrolling: true,//스크롤바를 스크롤 하면 한페이지씩 넘어감 
    keyboardScrolling:false,
    verticalCentered: false,
    scrollBar: true,
    navigation:true,
    autoScrolling: true,
    //scrollOverflow: true,
    normalScrollElements:'#s5',
    
});


$(".sliderlist .slideitem").eq(0).css("left","-100%");
var slideI = 0; 
setInterval(function(){
if(slideI<5){
    slideI++;
}else
{
    slideI=0;}
 $(".sliderlist .slideitem").eq(slideI).siblings().animate({"left":"-100%"},500);
$(".sliderlist .slideitem").eq(slideI).animate({"left":"0"},500);
},3000); 

const swiper = new Swiper('.firstslider',{
  loop: true,
  slidesPerView:1.5,
  spaceBetween:60,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    
  },
  
  });
  


$(".section_txt_T").hover(function(){
  $(this).css({"letter-spacing":"20px"});
}); 
$(".section_txt_T").mouseleave(function(){
  $(this).css({"letter-spacing":"0"},1000);
}); 

$('.glas_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  
  
});


$(".ham").click(function(){
  $(".btn").toggleClass('on');
  if($(".btn").hasClass("on")){
      $(".ham_menu").animate({right:0},400)
     
  }else{
      $(".ham_menu").animate({right:"-250px"},200)
   

  }
});
  



$(".slick-next,.slick-prev").click(function(){
   $(".changetxt").eq(0).attr({"display":"none"})
   var slicklist = 0; 
   setInterval(function(){
   if(slicklist<5){
    slicklist++;
   }else
   {
    slicklist =0;}
    $(".changetxt").eq(slicklist).siblings().addClass("active")
   $(".changetxt").eq(slicklist).removeClass("active");
   },2500); 
});
$(window).scroll(function(){
  
/** 식을 물어 볼것 오픈 소스 활용해서 애니메이션을 만들었음. */
});




 

