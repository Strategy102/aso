let navbar = document.querySelector('.header .navbar');
let menubtn = document.querySelector('#menu-btn');
menubtn.onclick=()=> {
    menubtn.classList.toggle('fa-times'); //js css
    navbar.classList.toggle('active'); //js css
};

var swiper = new Swiper('.home-slider', {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".latestwears-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
let previewContainer = document.querySelector('.latestwears-preview-container');
let previewBox = previewContainer.querySelectorAll('.latestwears-preview');
// console.log({previewBox});
document.querySelectorAll('.latestwears .slide').forEach((latestwears) => {
  latest.onclick = () => {
    // console.log('you Clicked on latest wears')
    previewContainer.style.display = 'flex';
    let name = latestwears.getAttribute('data-name');
    previewBox.forEach((preview) => {
      let target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active'); //js css
      }
    });
  };
});
previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach((close) => {
    close.classList.remove('active');
  });
};

var swiper = new Swiper('.wears-slider', {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});