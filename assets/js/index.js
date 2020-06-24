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