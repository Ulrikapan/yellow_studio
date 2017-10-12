// 設定nav .active位置的function

function navPosition(sectionA,sectionB,navposition){
  var windowHeight = $(window).scrollTop();
  if(windowHeight >=$(sectionA).offset().top && windowHeight <$(sectionB).offset().top){
    $(navposition).addClass('active')
  }else{
    $(navposition).removeClass('active');
  };
};

$(window).scroll(function(e){
  if($(window).scrollTop()>10){
    $('.explore').removeClass('atTop');
    $('nav').removeClass('navbarCustom');
  }else{
    $('.explore').addClass('atTop');
    $('nav').addClass('navbarCustom');
  }
  // nav .active位置function執行
  navPosition('#sectionAbout','#sectionService','#nav_about');
  navPosition('#sectionService','#sectionWork','#nav_service');
  navPosition('#sectionWork','#sectionContact','#nav_works');
  navPosition('#sectionContact','#footer','#nav_contact');
});



//---------------------
// 調整點選選單後，以滑動的方式到錨點定位
$(document).on('click','a',function(e){
  // 先取消a標籤的預設動作
  e.preventDefault();
  var target= $(e.target).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },1000);
});

 // 點選選單後收回
var MobileMenu = $('.navbar-collapse'),
    MobileNavToggleBtn = $('.navbar-toggle');

MobileMenu.find('li').on('click', function(){
  if(MobileMenu.hasClass('in')){
    MobileMenu.removeClass('in');
    MobileNavToggleBtn.addClass('collapsed');
  }
})
//---------------------
  // Contact三隻貓蘿蔔蹲function
function contactCat(catId,x){
  var catCenter = $(catId).offset().left + $(catId).width()/2;
  if(Math.abs(x-catCenter) <80 )
    $(catId).css('bottom','0px')
  else
    $(catId).css('bottom','-70px')
  
};
//---------------------

$(window).mousemove(function(e){
  // 滑鼠位置計算
  var pageX = e.pageX;
  var pageY = e.pageY;
  var src = 'http://awiclass.monoame.com/catpic';
  // 設定Cross跟著游標跑
  var y = pageY-$('#sectionAbout').offset().top;
  $('#cross').css('left',pageX+'px');
  $('#cross').css('top',y+'px');
  // console.log(pageY);
  if(pageY>$('#sectionAbout').offset().top && pageY<$('#sectionService').offset().top){
    $('#cross').css('opacity','1')
  }else{
    $('#cross').css('opacity','0')
  }
  // 帶入三隻貓蘿蔔蹲function
  contactCat('#cat_blue',pageX);
  contactCat('#cat_yellow',pageX);
  contactCat('#cat_grey',pageX);
  // 白色貓動畫
  if(pageX< $('#cat').offset().left ){
    $('#cat').attr('src',src+'/cat_left.png')
  }else if(pageX> $('#cat').offset().left + $('#cat').width()){
    $('#cat').attr('src',src+'/cat_right.png')
  }else{
    $('#cat').attr('src',src+'/cat_top.png')
  }
  if(pageX< $('#cat').offset().left && pageY < $('#cat').offset().top){
    $('#cat').attr('src',src+'/cat_lefttop.png')
  }
  if(pageX> $('#cat').offset().left + $('#cat').width() && pageY < $('#cat').offset().top){
    $('#cat').attr('src',src+'/cat_righttop.png')
  }
  
  // margin山形邊界動畫
  $('.margin').css('transform','translateX('+pageX/-30 +'px)')
  // sectionAbout文字動畫
  $('.text_r1').css('transform','translateX('+pageY/-5 +'px)')
  $('.text_r2').css('transform','translateX('+pageY/-10 +'px)')
  $('.text_r3').css('transform','translateX('+pageY/20 +'px)')
  // sectionAbout三角形動畫
  $('.tri-1').css('transform','translateX('+pageX/-10 +'px)')
  $('.tri-2').css('transform','translateX('+pageX/-15 +'px)')
  $('.tri-3').css('transform','translateX('+pageX/-20 +'px)')
  $('.tri-4').css('transform','translateX('+pageX/-25 +'px)')
  $('.tri-5').css('transform','translateX('+pageX/-15 +'px)')
});

// -------------------