window.addEventListener('DOMContentLoaded', () => {
    //Splash screen-js
    let intro = document.querySelector('.intro');
    let logo = document.querySelector('.logo_header');
    let logoSpan = document.querySelectorAll('.logo_slide');
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
window.addEventListener('load', function () {
    //Main_menu
    const listItems = $('.list_nav .bottom_list_nav li')
    listItems.click(function () {
        $('.bottom_list_nav .icon-active').removeClass('icon-active')
        $(this).addClass('icon-active')
    })
    // Slide_show-js
    const sliderItems = $('.slide_show_bg-img');
    var sliderLength = sliderItems.length;
    var pre = $('.slide_direct.pre');
    var next = $('.slide_direct.next');
    var number = $('.slide_number-link');
    var headLine = $('.headline');
    var headLineItem = [
        'RA MẮT PQ BANKING- THƯƠNG HIỆU NGÂN HÀNG SỐ ĐỒNG HÀNH CÙNG DOANH NGHIỆP',
        'PQ BANK “KHÔNG PHÍ” – GÓI ƯU ĐÃI GIÚP DOANH NGHIỆP KHÔNG LO VỀ PHÍ KHI GIAO DỊCH ONLINE',
        'PQ BANK CHÍNH THỨC RA MẮT THƯƠNG HIỆU NGÂN HÀNG SỐ ONE BANK',
        'Thông tin cảnh báo SMS giả mạo PQ BANK lừa đảo khách hàng']
    function getPosition() {
        let curr = $('.slide_number-link').filter('.slide-active');
        let index = curr.index('.slide_number-link');
        return index;
    }
    // Slider 1 on top 
    sliderItems[0].style.cssText = `  
        opacity:1;
    `;
    $('.slide_number-link').click(function () {
        // Lấy vị trí cũ để xoá thuộc tính
        let passActive = getPosition();
        let current = $('.slide-active');
        current.removeClass('slide-active');
        $(this).addClass('slide-active');
        // Lấy vị trí mới thêm thuộc tính vào
        let nowActive = getPosition();
        sliderItems[nowActive].style.opacity = 1;
        sliderItems[passActive].style.opacity = 0;
        headLine.text(headLineItem[nowActive]);
    })
    function prevSlide() {
        var pos = getPosition();
        if (pos == 0) {
            number[0].classList.remove('slide-active');
            number[number.length - 1].classList.add('slide-active');
            sliderItems[sliderLength - 1].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[0].style.cssText = `  
                opacity:0;
            `;
        } else {
            number[pos - 1].classList.add('slide-active');
            number[pos].classList.remove('slide-active');
            sliderItems[pos - 1].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[pos].style.cssText = `  
                opacity:0;
            `;
        }
        pos = getPosition();
        addAtr(pos);
    }
    function nextSlide() {
        var pos = getPosition();
        if (pos == number.length - 1) {
            number[number.length - 1].classList.remove('slide-active');
            number[0].classList.add('slide-active');
            sliderItems[0].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[sliderLength - 1].style.cssText = `  
                opacity:0;
            `;
        } else {
            number[pos + 1].classList.add('slide-active');
            number[pos].classList.remove('slide-active');
            sliderItems[pos + 1].style.cssText = `
                animation: fadeIn 0.5s ease-out; 
                opacity:1;
            `;
            sliderItems[pos].style.cssText = `  
                opacity:0;
            `;
        }
        pos = getPosition();
        addAtr(pos);
    }

    let myInterval = setInterval(nextSlide, 8000);

    function myStop() {
        window.clearInterval(myInterval);
    }

    function myStopAndReset() {
        window.clearInterval(myInterval);
        resetInterval();
    }

    pre.click(function () {
        prevSlide();
    })

    next.click(function () {
        nextSlide();
    })
    function resetInterval() {
        setTimeout(function () {
            myInterval = setInterval(nextSlide, 8000);
        }, 16000);
    }
    function addAtr(pos) {
        headLine.text(headLineItem[pos]);
    }
    //Seemore
    var seeMore = document.querySelector(".js_see_more");
    var More = document.querySelectorAll(".news_see_more");
    var d = 0;
    seeMore.addEventListener("click", function () {
        for (i = 0; i < 3; i++)
            More[d++].style.display = "block";
        if (d == More.length) seeMore.style.display = "none";
    })
    /*Back to top button*/
    const backToTopbtn = document.querySelector("#back_to_top");
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
        if (window.pageYOffset > 100) {  //show backtotop
            if (!backToTopbtn.classList.contains("button_entrance")) {
                backToTopbtn.classList.remove("button_exit");
                backToTopbtn.classList.add("button_entrance");

                backToTopbtn.style.display = "block";
            }
        }
        else { //hidden backtotop
            if (backToTopbtn.classList.contains("button_entrance")) {
                backToTopbtn.classList.remove("button_entrance");
                backToTopbtn.classList.add("button_exit");
                setTimeout(function () {
                    backToTopbtn.style.display = "none";
                }, 200);
            }
        }
        backToTopbtn.addEventListener("click", backtotop);

        function backtotop() {
            window.scrollTo(0, 0);
        }
    }
})
