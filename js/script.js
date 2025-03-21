const reelsSwiper = new Swiper('.reels-swiper', {
    direction: 'vertical',
})

const clientWidth = window.innerWidth;

$(function () {
    $.scrollify({
        section: ".scrollify",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1400,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function () { },
        after: function (index) {
            const activeSlide = document.querySelector('.swiper-slide-active')
            if (index == 2) {
                activeSlide.querySelector('video').currentTime = 0
                activeSlide.querySelector('video').play()
            } else {
                activeSlide.querySelector('video').pause()
            }
        },
        afterResize: function () { },
        afterRender: function () { }
    });
})

// document.addEventListener('touchstart', function(e) {
//     if (reelsSwiper.el.contains(e.target)) {
//         $.scrollify.disable()
//         if (reelsSwiper.isEnd) {
//             $.scrollify.enable();
//         }
//     }
// })

document.addEventListener("touchstart", e => y = e.changedTouches[0].clientY);
document.addEventListener("touchmove", e => {
    let dir = e.changedTouches[0].clientY - y;
    let isSwiper = reelsSwiper.el.contains(e.target)
    let length = reelsSwiper.slides.length;
    if (dir < 0 && isSwiper) {
        $.scrollify.disable()
        if (reelsSwiper.activeIndex == length - 1) {
            $.scrollify.enable()
        }
        return
    }

    if (dir > 0 && isSwiper) {
        if (reelsSwiper.activeIndex == length - 1) {
            $.scrollify.disable()
        }
        if (reelsSwiper.activeIndex == 0) {
            $.scrollify.enable()
        }
    }
});

const svg = document.querySelector('svg.teaser__img');
let width = svg.clientWidth;
let height = svg.clientHeight;
let coeff = 0.69;

if (clientWidth <= 1400) {
    svg.style.height = `${width * coeff}px`;
}

const hideOtherItems = (elArr, className) => {
    elArr.forEach((faqItem) => {
        removeClass(faqItem, className);
    });
};

reelsSwiper.on('transitionEnd', function () {
    reelsSwiper.slides.forEach((item) => {
        const video = item.querySelector('video');
        video.pause()
    })
    const activeSlide = reelsSwiper.el.querySelector('.swiper-slide-active')
    const video = activeSlide.querySelector('video')
    video.currentTime = 0;
    video.play();
    // reelsSwiper.slides
})
