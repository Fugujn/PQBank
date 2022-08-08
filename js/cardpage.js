/*click Search form */
let searchForm = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    searchForm.classList.toggle("active");
}

window.onclick = () => {
    searchForm.classList.remove("active");
}
$(document).ready(function() {
    $(".products_card").slick({
        slidestoShow: 4,
        slidestoScroll: 1,
        rows: 2,
        slidesPerRow: 2,
        cssEase: 'linear',
        prevArrow:"<button type='button' class='slick-prev slick-arrows'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrows'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",   
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