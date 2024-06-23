import $ from 'jquery';

export function btnnews() {

  $('.btn-new').on('click', function () {
    // console.log('teste');
    var classatual =  $(this.parentNode);
    classatual.removeClass('image-new').addClass('screen');
    setTimeout(() => {
        $('.image-new').css("display", "none");
    }, 750);
    $('.btn-new').css("display", "none");
    $('.active').addClass('back');
  });

  $('.active').on('click', function () {
    var classatual =  $(this.parentNode);
    classatual.removeClass('screen').addClass('image-new');
    setTimeout(() => {
        $('.image-new').removeAttr('style');
    }, 550);
    $('.btn-new').removeAttr('style');
    $('.active').removeClass('back');
  });
}

export function movebtnleftproducts() {
  var movescroll = 0;
  movescroll = $('.scroll-products').scrollLeft();
  $('.scroll-products').animate({scrollLeft: movescroll - 300}, 150);
}

export function movebtnrightproducts() {
  var movescroll = 0;
  movescroll = $('.scroll-products').scrollLeft();
  $('.scroll-products').animate({scrollLeft: movescroll + 300}, 150);
}