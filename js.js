const aside = document.querySelectorAll('.aside')[0]
const bar = document.querySelectorAll('.bar')[0]
const asideBg = document.querySelectorAll('.aside-bg')[0]
const header = document.querySelectorAll('.header-navbar')[0]

function handleScoll(){
    if (window.pageYOffset >= header.offsetTop + 50) {
        header.classList.add("sticky-navbar")
    } else {
        header.classList.remove("sticky-navbar");
    }
}

function handleAsideSliceIn(){
    aside.setAttribute('style', 'left: 0px')
    asideBg.setAttribute('style', 'display: block')
}

function handleAsideSliceOut(){
    aside.removeAttribute('style')
    asideBg.removeAttribute('style')
}

window.onscroll = handleScoll
bar.addEventListener('click', handleAsideSliceIn)
asideBg.addEventListener('click', handleAsideSliceOut)

$(document).ready(function(){
    console.log($('.autoplay'))
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
    });
});