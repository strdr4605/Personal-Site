$(document).ready(function(){
    $('.product').click(function(event){
      event.stopPropagation()
      $(this).children('.zoom-product').addClass('display-flex').removeClass('hidden')
    });
    $('body').click(function () {
      $('.display-flex').addClass('hidden').removeClass('display-flex')
    })
});
