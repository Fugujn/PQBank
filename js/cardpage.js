//Splash screen-js
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo_header');
let logoSpan = document.querySelectorAll('.logo_slide');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300)
    })
})

/*click Search form */
let search = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    search.classList.toggle("active");
}

let menuMobile = document.querySelector(".list_item");

document.querySelector("#menu_btn").onclick = () => {
    menuMobile.classList.toggle("active");
}
$(document).ready(function() {
    $(".products_card").slick({
        slidestoShow: 2,
        slidestoScroll: 2,
        rows: 2,
        slidesPerRow: 2,
        speed: 1000,
        cssEase: 'linear',
        prevArrow:"<button type='button' class='slick-prev slick-arrows'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrows'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",   
        responsive: [
            {
                breakpoint: 952,
                settings: {
                    rows: 2,
                    slidesPerRow: 1,
                }
                
            }
        ]    
    });
});
/*Back to top button*/
const backToTopbtn =  document.querySelector("#back_to_top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 1000) {  //show backtotop
        if(!backToTopbtn.classList.contains("button_entrance")) {
            backToTopbtn.classList.remove("button_exit");
            backToTopbtn.classList.add("button_entrance");

            backToTopbtn.style.display = "block";
        }
    }
    else { //hidden backtotop
        if (backToTopbtn.classList.contains("button_entrance")) {
            backToTopbtn.classList.remove("button_entrance");
            backToTopbtn.classList.add("button_exit");
            setTimeout( function() {
                backToTopbtn.style.display = "none";
            }, 200);
        }
    }
    backToTopbtn.addEventListener("click", backtotop);

    function backtotop() {
        window.scrollTo(0,0);
    }
}