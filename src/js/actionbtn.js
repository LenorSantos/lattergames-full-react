import $ from 'jquery';

export function btndestaques() {

  $('.btn-new').on('click', function () {
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

export function movebtnleftpromo() {
  var movescroll = 0;
  movescroll = $('.scroll-promo').scrollLeft();
  $('.scroll-promo').animate({scrollLeft: movescroll - 300}, 150);
}

export function movebtnrightpromo() {
  var movescroll = 0;
  movescroll = $('.scroll-promo').scrollLeft();
  $('.scroll-promo').animate({scrollLeft: movescroll + 300}, 150);
}