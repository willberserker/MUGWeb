$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});
$(window).ready(function(){
   $('h2').click(function(){
      if($(this).next().hasClass('desplegado')){
         $(this).next().removeClass('desplegado');
      }else{
         $(this).next().addClass('desplegado');
      }
   })
})
