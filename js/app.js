const burgerMenu = document.querySelector('.burger__menu');
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const introH = intro.offsetHeight;
const body = document.body;


let introOffset = 0;


/* burger */

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    header.classList.toggle('activeM');
    burger.classList.toggle('active');
});

/* fixed header */

window.addEventListener('scroll', () => {
    introOffset = this.scrollY;

    if(introOffset >= introH) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
});

/* smooth scroll */

const navLink = document.querySelectorAll('[data-scroll]');

navLink.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        let blockId = item.getAttribute('data-scroll');
        let blockOffset = document.querySelector(blockId).offsetTop;
        burgerMenu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('activeM');

        setTimeout(function() {
            if(blockId == '#projects') {
                window.scrollTo({
                    top: blockOffset,
                    behavior: "smooth"
                });
            }
            else {
                window.scrollTo({
                    top: blockOffset - header.offsetHeight,
                    behavior: "smooth"
                });
            }
        }, 100);

    });
});

/* question func */

const questionBlock = document.querySelectorAll('.question__item--title--block');

questionBlock.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})


/* modal */

const btnModal = document.querySelectorAll('[data-modal]');

btnModal.forEach(item => {
    item.addEventListener('click', () => {
        let modalId = item.getAttribute('data-modal');
        let modalBlock = document.querySelector(modalId);
        let modalContent = modalBlock.querySelector('.modal__zapros');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modalBlock.classList.add('active');
        body.classList.add('no-scroll');
        setTimeout(function () {
            modalContent.style.transform = 'translateY(0)';
        },200);
    });
});

const btnClose = document.querySelectorAll('.modal__close');

btnClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target.closest('.modal');
        let modalContent = document.querySelector('.modal__zapros');

        modalContent.style.transform = 'translateY(-30px)';
        setTimeout(function() {
            currentModal.classList.remove('active');
            body.classList.remove('no-scroll');
        }, 200);
    });
});


const modal = document.querySelectorAll('.modal');

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;
        let modalContent = document.querySelector('.modal__zapros');

        modalContent.style.transform = 'translateY(-30px)';
        setTimeout(function() {
            currentModal.classList.remove('active');
            body.classList.remove('no-scroll');
        }, 200);
    });
});
