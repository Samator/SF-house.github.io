$(function () {
        $('.check-section__check-wrapper').click(function(){
        $('.check-section__check-item').toggleClass('check-active')
        $('.form__radiobtn').prop("checked", true)
    });
    $('.check-section-2__check-wrapper').click(function(){
        $('.check-section-2__check-item').toggleClass('check-active')
        $('.form__radiobtn').prop("checked", true)
    })
    /*=====услуги-навигация===*/
    $('.services__block-nav__item').hover(function(){
        $('.services__block-nav__item-text').removeClass('services-nav-active')
        $(this).children('.services__block-nav__item-text').toggleClass('services-nav-active')
    })
    $('.services__block-nav__item').click(function(){
        $('.services__block-nav__item-text').removeClass('services-nav-active')
        $(this).children('.services__block-nav__item-text').toggleClass('services-nav-active')
    })
    $('.services__block-nav__item').on('click', function(){
        if($(this).attr('id') == 'services-nav-1'){
            $('#services-1').css('display', 'flex')
            $('#services-2').css('display', 'none')
            $('#services-3').css('display', 'none')
            $('#services-4').css('display', 'none')
            $('.services__block-content').addClass('bg-1')
            $('.services__block-content').removeClass('bg-2')
            $('.services__block-content').removeClass('bg-3')
            $('.services__block-content').removeClass('bg-4')
        }else if($(this).attr('id') == 'services-nav-2'){
            $('#services-1').css('display', 'none')
            $('#services-2').css('display', 'flex')
            $('#services-3').css('display', 'none')
            $('#services-4').css('display', 'none')
            $('.services__block-content').removeClass('bg-1')
            $('.services__block-content').addClass('bg-2')
            $('.services__block-content').removeClass('bg-3')
            $('.services__block-content').removeClass('bg-4')
        }else if($(this).attr('id') == 'services-nav-3'){
            $('#services-1').css('display', 'none')
            $('#services-2').css('display', 'none')
            $('#services-3').css('display', 'flex')
            $('#services-4').css('display', 'none')
            $('.services__block-content').removeClass('bg-1')
            $('.services__block-content').removeClass('bg-2')
            $('.services__block-content').addClass('bg-3')
            $('.services__block-content').removeClass('bg-4')
        }else if($(this).attr('id') == 'services-nav-4'){
            $('#services-1').css('display', 'none')
            $('#services-2').css('display', 'none')
            $('#services-3').css('display', 'none')
            $('#services-4').css('display', 'flex')
            $('.services__block-content').removeClass('bg-1')
            $('.services__block-content').removeClass('bg-2')
            $('.services__block-content').removeClass('bg-3')
            $('.services__block-content').addClass('bg-4')
        }
    })
})



$('.price__nav-item').on('click', function(){
    if($(this).attr('id') == 'p-nav-1'){
        $('.price__nav-item').removeClass('price__nav-item-active');
        $(this).children('.price__nav-item-text').addClass('price__nav-item-text-active');
        $(this).addClass('price__nav-item-active');
        $('.price__nav-item').removeClass('border-active')
        $('.price-list').removeClass('price-list-active')
        $('.price-list-1').addClass('price-list-active')
    }else if($(this).attr('id') == 'p-nav-2'){
        $('.price__nav-item').removeClass('price__nav-item-active');
        $(this).children('.price__nav-item-text').addClass('price__nav-item-text-active');
        $(this).addClass('price__nav-item-active');
        $('.price__nav-item').removeClass('border-active')
        $('.price__nav-item:nth-child(1)').addClass('border-active')
        $('.price-list').removeClass('price-list-active')
        $('.price-list-2').addClass('price-list-active')
    }
    else if($(this).attr('id') == 'p-nav-3'){
        $('.price__nav-item').removeClass('price__nav-item-active');
        $(this).children('.price__nav-item-text').addClass('price__nav-item-text-active');
        $(this).addClass('price__nav-item-active');
        $('.price__nav-item').removeClass('border-active')
        $('.price__nav-item:nth-child(2)').addClass('border-active')
        $('.price-list').removeClass('price-list-active')
        $('.price-list-3').addClass('price-list-active')
    }else if($(this).attr('id') == 'p-nav-4'){
        $('.price__nav-item').removeClass('price__nav-item-active');
        $(this).children('.price__nav-item-text').addClass('price__nav-item-text-active');
        $(this).addClass('price__nav-item-active');
        $('.price__nav-item').removeClass('border-active')
        $('.price__nav-item:nth-child(3)').addClass('border-active')
        $('.price-list').removeClass('price-list-active')
        $('.price-list-4').addClass('price-list-active')
    }else if($(this).attr('id') == 'p-nav-5'){
        $('.price__nav-item').removeClass('price__nav-item-active');
        $(this).children('.price__nav-item-text').addClass('price__nav-item-text-active');
        $(this).addClass('price__nav-item-active');
        $('.price__nav-item').removeClass('border-active')
        $('.price__nav-item:nth-child(4)').addClass('border-active')
        $('.price-list').removeClass('price-list-active')
        $('.price-list-5').addClass('price-list-active')
    }
})




$(document).ready(function(){
    $('.slider-main').slick({
        autoplay: true,
        prevArrow: ".left-btn",
        nextArrow: ".right-btn",
        responsive: [
            {
              breakpoint: 620,
              settings: {
                prevArrow: false,
                nextArrow: false,
              }
            },
        ]
    });   
  });
  $(document).ready(function(){
    $('.about-us__block-slider').slick({
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        adaptiveHeight: true,
    });   
  });



  /*======gallery======*/
  $('.gallery__item-block').mouseover(function(){
      $(this).children('.gallery__item-img').css('background-size','130%')
  })
  $('.gallery__item-block').mouseout(function(){
    $(this).children('.gallery__item-img').css('background-size','cover')
})


$('.gallery__item-block').click(function(){
    $('.gallery__window-wrap').addClass('gallery-active')
    $('body').css('overflow','hidden')
    if($(this).attr('id') == 'g-1'){
        $('.gallery__container').css('display','none')
        $('.gallery__container-1').css('display','block')
    }else if($(this).attr('id') == 'g-2'){
        $('.gallery__container').css('display','none')
        $('.gallery__container-2').css('display','block')
    }else if($(this).attr('id') == 'g-3'){
        $('.gallery__container').css('display','none')
        $('.gallery__container-3').css('display','block')
    }else if($(this).attr('id') == 'g-4'){
        $('.gallery__container').css('display','none')
        $('.gallery__container-4').css('display','block')
    }else if($(this).attr('id') == 'g-5'){
        $('.gallery__container').css('display','none')
        $('.gallery__container-5').css('display','block')
    }else if($(this).attr('id') == 'g-6'){
        $('.gallery__container').css('display','none')
        $('.gallery__container-6').css('display','block')
    }
})

$('.modal-close').click(function(){
    $('.gallery__window-wrap').removeClass('gallery-active')
    $('body').css('overflow-y','auto')
})
