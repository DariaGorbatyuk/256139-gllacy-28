const btnModalOpen = document.querySelector('.contacts-modal-form-link');
const modalWhole = document.querySelector('.modal-connection__layout');
const modalFormSection = document.querySelector('.modal-connection');
const modalForm = document.querySelector('.connection-form');
const btnModalClose = document.querySelector('.connection__close');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const message = document.querySelector('.message');
const wrapper = document.querySelector('.site-wrapper');
const sliderElement = document.querySelectorAll('.slider-item');
const btnSlider = document.querySelectorAll('.slider-btn');

function clean(wrapper, slider, buttons){
  slider.forEach(element=>{
    element.classList.remove('active')
  });
  buttons.forEach(element=>{
    element.classList.remove('active')
  });
  wrapper.classList.remove('wrapper-1');
  wrapper.classList.remove('wrapper-2');
  wrapper.classList.remove('wrapper-3');
}

btnModalOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWhole.classList.add('open');
  login.focus();
})
btnModalClose.addEventListener('click', function () {
  modalWhole.classList.remove('open');
  modalFormSection.classList.remove('error');
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalWhole.classList.contains('open')) {
      evt.preventDefault();
      modalWhole.classList.remove('open');
      modalFormSection.classList.remove('error');
    }
  }
});

modalForm.addEventListener('submit', function (evt) {
  if (!login.value || !password.value || !message.value) {
    evt.preventDefault();
    modalFormSection.classList.remove('error');
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalFormSection.classList.add('error');
  }
});

btnSlider[0].addEventListener('click', function () {
  clean(wrapper, sliderElement, btnSlider);
  btnSlider[0].classList.add('active');
  sliderElement[0].classList.add('active');
  wrapper.classList.add('wrapper-1');
})

btnSlider[1].addEventListener('click', function () {
  clean(wrapper, sliderElement, btnSlider);
  btnSlider[1].classList.add('active');
  sliderElement[1].classList.add('active');
  wrapper.classList.add('wrapper-2');
})
btnSlider[2].addEventListener('click', function () {
  clean(wrapper, sliderElement, btnSlider);
  btnSlider[2].classList.add('active');
  sliderElement[2].classList.add('active');
  wrapper.classList.add('wrapper-3');
})
