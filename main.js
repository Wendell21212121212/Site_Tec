$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load' ,function(){
        $(this).removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });
    });

    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });

    $('.gallery .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .box').show(400);
        }else{
            $('.gallery .box').not('.'+ filter).hide(200);
            $('.gallery .box').filter('.'+ filter).show(200);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active')
    })
});

function setRating(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 1; i <= 5; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_1(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 6; i <= 10; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }

    }
}

function setRating_2(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 11; i <= 15; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_3(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 16; i <= 20; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_4(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 21; i <= 25; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_5(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 26; i <= 30; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_6(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 31; i <= 35; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_7(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 36; i <= 40; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_8(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 41; i <= 45; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_9(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 46; i <= 50; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_10(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 51; i <= 55; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_11(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 56; i <= 60; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_12(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 61; i <= 65; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_13(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 66; i <= 70; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}


function setRating_14(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 71; i <= 75; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}

function setRating_15(rating) {
    // Atualiza a cor das estrelas selecionadas
    for (var i = 76; i <= 80; i++) {
      var star = document.getElementsByClassName('star')[i-1];
      if (i <= rating) {
        star.style.color = 'gold';
      } else {
        star.style.color = 'gray';
      }
    }
}