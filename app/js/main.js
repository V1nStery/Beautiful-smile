lightGallery(document.querySelector(".certificates"), {
  speed: 500,
});

// Управление бургер-меню
const popupMenu = document.getElementById("popup-menu");
const burger = document.querySelector(".burger");
const body = document.body;

if (popupMenu && burger) {
  burger.addEventListener("click", function(e) {
    burger.classList.toggle("active");
    popupMenu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
}

const callPopup = document.getElementById('popup-call');
const callButtons = document.querySelectorAll('.call');
const closeButtons = document.querySelectorAll('.close-popup');

// Открытие попапа
callButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    callPopup.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});

// Закрытие попапа
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    callPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Закрытие по клику на фон
callPopup.addEventListener('click', (e) => {
  if(e.target === callPopup) {
    callPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});

// Отправка формы
document.querySelector('#popup-call form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Ваш код отправки
  console.log('Форма отправлена!');
  
  setTimeout(() => {
    callPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }, 1000);
});




new Swiper(".swiper-reviews", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});
