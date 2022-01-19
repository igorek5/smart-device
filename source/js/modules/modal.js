const button = document.querySelector('.page-header__button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const modalButtonClose = document.querySelector('.modal__close');
const formInput = document.querySelector('.modal__field--name input');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const openModal = () => {
  document.body.classList.add('no-scroll');
  modal.classList.add('open');
  overlay.classList.remove('hidden');
  formInput.focus();
};

const modalCloseHandler = (evt) => {
  evt.preventDefault();
  closeModal();
  button.focus();
};

const modalCloseEscHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeModal();
    button.focus();
  }
};

const modalButtonHandler = (evt) => {
  evt.preventDefault();
  openModal();
  modalButtonClose.addEventListener('click', modalCloseHandler);
  document.addEventListener('keydown', modalCloseEscHandler);
  overlay.addEventListener('click', modalCloseHandler);
};

function closeModal() {
  document.body.classList.remove('no-scroll');
  modal.classList.remove('open');
  overlay.classList.add('hidden');

  modalButtonClose.removeEventListener('click', modalCloseHandler);
  document.removeEventListener('keydown', modalCloseEscHandler);
  overlay.removeEventListener('click', modalCloseHandler);
}

export const setModalControl = () => {
  if (!button) {
    return;
  }

  button.addEventListener('click', modalButtonHandler);
};
