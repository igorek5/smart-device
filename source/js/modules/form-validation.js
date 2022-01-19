import {initPhoneMask} from './phone-mask.js';

const forms = document.querySelectorAll('.form form');

const minNameLength = 1;
const minPhoneLength = 17;

const setVisibleError = (field) => {
  field.classList.add('is-invalid');
  field.nextElementSibling.classList.add('active');
};

const checkFieldLength = (field, length) => {
  if (field.value.length > length) {
    return true;
  }
  field.classList.add('is-invalid');
  setVisibleError(field);
  return false;
};

const inputRemoveErrorHandler = ({target}) => {
  target.classList.remove('is-invalid');
  target.nextElementSibling.classList.remove('active');
};

const inputRemoveError = () => {
  document.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', inputRemoveErrorHandler);
  });
};

const checkСheckbox = (checkbox) => {
  if (checkbox.checked) {
    return true;
  }
  checkbox.classList.add('is-invalid');
  return false;
};

const checkTextarea = (textarea) => {
  if (textarea.value.length) {
    return true;
  }
  textarea.classList.add('is-invalid');
  setVisibleError(textarea);
  return false;
};

const validateInputs = (form) => {
  const nameInput = form.querySelector('.form__name input');
  const phoneInput = form.querySelector('.form__phone input');
  const checkboxInput = form.querySelector('.form__checkbox input');
  const textarea = form.querySelector('.form__textarea textarea');

  const flagName = checkFieldLength(nameInput, minNameLength);
  const flagPhone = checkFieldLength(phoneInput, minPhoneLength);
  const flagСheckbox = checkСheckbox(checkboxInput);
  const flagTextarea = checkTextarea(textarea);


  if (!flagName || !flagPhone || !flagСheckbox || !flagTextarea) {
    return false;
  }
  return true;
};

const formInputHandler = (evt) => {
  evt.preventDefault();

  if (validateInputs(evt.target)) {
    evt.target.submit();
    evt.target.reset();
  }
};

export const initFormValidate = () => {
  if (!forms) {
    return;
  }
  initPhoneMask();
  inputRemoveError();
  forms.forEach((form) => {
    form.addEventListener('submit', formInputHandler);
  });
};
