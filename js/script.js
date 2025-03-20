const reelsSwiper = new Swiper('.reels-swiper', {
    direction: 'vertical',
})

const clientWidth = window.innerWidth;

// $(function () {
//     $.scrollify({
//         section: ".scrollify",
//         sectionName: "section-name",
//         interstitialSection: "",
//         easing: "easeOutExpo",
//         scrollSpeed: 1400,
//         offset: 0,
//         scrollbars: true,
//         standardScrollElements: "",
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: true,
//         touchScroll: true,
//         before: function () { },
//         after: function () { },
//         afterResize: function () { },
//         afterRender: function () { }
//     });
// })

// document.addEventListener('touchstart', function(e) {
//     if (reelsSwiper.el.contains(e.target)) {
//         $.scrollify.disable()
//         return;
//     }
//     $.scrollify.enable();
// })

const svg = document.querySelector('svg.teaser__img');
let width = svg.clientWidth;
let height = svg.clientHeight;
let coeff = 0.69;

if (clientWidth <= 1400) {
    svg.style.height = `${width * coeff}px`;
} else if (clientWidth <= 1200) {
    console.log(width)
}