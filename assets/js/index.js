$(document).ready(function() {
  function menu() {
    $menu__link = $('.menu__link');
    $menu__link_main = $('.menu__link_main');

    $menu__link.on('mouseenter', function() {
      if ($(this).hasClass('menu__link_inactive')) {
        $menu__link.removeClass('menu__link_active').addClass('menu__link_inactive');
        $(this).addClass('menu__link_active').removeClass('menu__link_inactive');
      }
    });

    $menu__link.on('mouseleave', function() {
      $(this).removeClass('menu__link_active').addClass('menu__link_inactive');
      $menu__link_main.addClass('menu__link_active');
    });
  }

  menu();

  function menuBurger() {
    $menu_burger = $(".menu-burger");
    $menu = $(".menu");
    let result;

    $(document).click(function(event) {
      $target = $(event.target);
      if ($target.closest('.menu-burger').length) {
      	result = 1;
      	console.log(1);
      }
      if (!$target.closest('.menu,.menu-burger').length) {
      	result = 2;
      	console.log(2);
      }

      switch (result) {
        case 1:
          $menu.toggleClass('menu_mobile');
          $menu_burger.toggleClass('menu-burger_mobile');
          break;
        case 2:
          $menu.removeClass('menu_mobile');
          $menu_burger.removeClass('menu-burger_mobile');
          break;
        default:
          break;
      }
    });
  }

  menuBurger();

  function input() {
    $menu_bottom__input = $('.menu-bottom__input');
    $menu_bottom__input.focus(function() {
      $(this).addClass('menu-bottom__input_active');
    })
    $menu_bottom__input.focusout(function() {
      $(this).removeClass('menu-bottom__input_active');
      $(this).val("");
    })
  }

  input();

});