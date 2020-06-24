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
    let clicked = false;

/*    let clickout = function () {
    	$(document).on("click", function(event){
    	if((clicked) && (!$(event.target).closest(".menu").length)){
    		console.log('123');
    		console.log($menu.hasClass('menu_mobile'));
    		$menu.removeClass('menu_mobile');
    	}
    });
    }*/

    $menu_burger.on("click", function() {
    	console.log('456');
    	clicked = true;
      $menu.toggleClass('menu_mobile');
      $menu_burger.toggleClass('menu-burger_mobile');
    });
    

	}
    /*    $(document).on("click", function(event){
            if(!$(event.target).closest(".dropdown").length){
                $(".dropdown-menu").slideUp("fast");
                
                // Showing the hint message
                $(".hint").html("A click <b>outside</b> the dropdown is detected.");
            }
        });*/

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