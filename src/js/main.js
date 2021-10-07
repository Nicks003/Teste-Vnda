'use strict';

let menuMob = document.querySelector('.buttons-menu');
let arrow = document.querySelector('.arrow');
let searchIcon = document.querySelector('.search');
let modalDiv = document.querySelector('.modal');
let modalForm = document.querySelector('.modal .modal-search form');
const swiper = new Swiper('.swiper', {

    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});  

menuMob.addEventListener('click', (e) => {
    if (menuMob.classList.contains('active')) {
        menuMob.classList.remove('active')
        document.querySelector('.nav-mobile').classList.remove('show-menu');
    } else {
        menuMob.classList.add('active');
        document.querySelector('.nav-mobile').classList.add('show-menu');
    }
    console.log(e.target)
})

arrow.addEventListener('click', (e) => {
    let el = document.querySelector('.engaging-section');
    let presetReduction = document.querySelector('header').offsetHeight;
    let posEl = (el.getBoundingClientRect().top + window.scrollY) - presetReduction;


    console.log(posEl)
    console.log(window.pageYOffset)
    window.scrollTo({top: posEl, behavior: 'smooth'});

    
})

searchIcon.addEventListener('click', (e) => {
    modalDiv.classList.add('active-modal');
    e.stopPropagation()

})

modalForm.addEventListener('click', (e) => {
    e.stopPropagation()
})

document.addEventListener('click', (e) => {
    if (modalDiv.classList.contains('active-modal')) {
        modalDiv.classList.remove('active-modal')
    }
})