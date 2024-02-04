//Codes for the Navbar
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
//End Code for the NavBar


$(document).ready(function() {
    jQuery.extend(verge);
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 900);
    });

    $('#down').click(function() {
        $('html,body').animate({
            scrollTop: $('#about').offset().top - 50
        }, 900);
    });
    $('#down').addClass('animated infinite slideInDown');
});

function animateChevron() {
    var scrollHeight = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var triggerHeight = documentHeight - windowHeight;

    if (scrollHeight < triggerHeight) {
        $('html, body').animate({ scrollTop: triggerHeight }, 500);
    } else {
        $('html, body').animate({ scrollTop: 0 }, 500);
    }
}


