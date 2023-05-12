$('.fa-cog').click(function(){
  $('.theme-toggler').toggleClass('is-visible');
  if ($('.theme-toggler').hasClass('is-visible')) {
    $('.theme-toggler').animate({
    right : '0'
  },500)
  }
  else{
    $('.theme-toggler').animate({
    right : '-20rem'
  },500)
  }
})
$('.theme-btn').each(function(){
  $(this).css('background',$(this).data('color'));
})
$('.theme-btn').click(function(){
  $('body').css('--main-color', $(this).data('color'));
})