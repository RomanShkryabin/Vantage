$(function() {

  $('.about__project-slider').slick ({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinite: true,
    responsive:
    [
      {
        breakpoint:1200,
        settings: {
        slidesToShow: 2, 
        }
      },
      {
        breakpoint:600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1, 
        
        }
      },
    ]
    })

    $(".menu__list a, .header__top-btn").on("click", function (e) {
      //отменяем стандартную обработку нажатия по ссылке
              e.preventDefault();
     //забираем идентификатор бkока с атрибута href
              var id  = $(this).attr('href'),
     //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top;
     //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 1500);
          });

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') ===false) {
          $('.burger').addClass('burger--follow')
        } else {
          $('.burger').removeClass('burger--follow')
        } 
        
      }, 0);

      $('.burger, .overlay').on('click', function(e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
      })
      

      

})
