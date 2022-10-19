const aside = document.querySelectorAll('.aside')[0]
const bar = document.querySelectorAll('.bar')[0]
const asideBg = document.querySelectorAll('.aside-bg')[0]
const headerNavbar = document.querySelectorAll('.header-navbar')[0]
const header = document.querySelectorAll('.header')[0]
const light = document.querySelector('#light')
const dark = document.querySelector('#dark')
const windowWidth = window.innerWidth

function handleScoll(){
    if (window.pageYOffset >= headerNavbar.offsetTop + 50) {
        headerNavbar.classList.add("sticky-navbar")
    } else {
        headerNavbar.classList.remove("sticky-navbar");
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

function handleDarkMode(){
    console.log('xin chao')
    header.setAttribute('style', 'background-image: linear-gradient(to right, #434343, #000000);')
}

dark.addEventListener('click', handleDarkMode)