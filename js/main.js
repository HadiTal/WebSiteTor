/*-----------NavbarMenuMobile---------------*/
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");
}

/*-----------NavbarMenuMobile---------------*/

/*-------Scroll Navbar Mobile---------*/

$(document).ready(function() {
    $(window).scroll(function() {
        var too = $(window).scrollTop();

        if (too > 0) {
            $(".navbar").css({ opacity: "0" });
        } else {
            $(".navbar").css({ opacity: "1" });
        }
    });
    /*-----Scroll Navbar Mobile---------*/


    /*-----First hide Popop---------*/

    $(window).click(function() {

        $(".popholder").fadeOut(500);
        $(".popop").fadeOut(1000);

    })

    /*-----End hide Popop---------*/




});