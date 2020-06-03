
$(window).on('resize', function(){
  $(".carousel-item").height($(window).height())

});
$(window).on('load', function(){
  $(".carousel-item").height($(window).height())
  $('.focuspoint').focusPoint();
});
