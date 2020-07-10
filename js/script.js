const btnModalOpen = document.querySelector('.contacts-modal-form-link');
const modalWhole = document.querySelector('.modal-connection__layout');
const modalFormSection = document.querySelector('.modal-connection');
const modalForm = document.querySelector('.connection-form');
const btnModalClose = document.querySelector('.connection__close');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const message = document.querySelector('.message');

btnModalOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWhole.classList.add('open');
  login.focus();
})
btnModalClose.addEventListener('click', function () {
  modalWhole.classList.remove('open');
  modalFormSection.classList.remove("error");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWhole.classList.contains("open")) {
      evt.preventDefault();
      modalWhole.classList.remove("open");
      modalFormSection.classList.remove("error");
    }
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!login.value || !password.value || !message.value) {
    evt.preventDefault();
    modalFormSection.classList.remove("error");
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalFormSection.classList.add("error");
  }
});
