import {initPhoneMask} from './phone-mask.js';

const form = document.querySelector('.feedback form');
const nameInput = document.querySelector('.feedback__field--name input');
const phoneInput = document.querySelector('.feedback__field--phone input');
const checkboxInput = document.querySelector('.feedback__personal-checkbox input');

const minNameLength = 1;
const minPhoneLength = 17;

const messageError = {
  nameError: 'Ведите имя',
  phoneError: 'Телефон в формате +7 (XXX) XXX-XX-XX',
};

const createErrorElement = (field, message) => {
  let span = document.createElement('span');
  span.classList.add('form__error-message');
  span.textContent = message;
  field.parentNode.append(span);
};

const checkFieldLength = (field, length, message) => {
  if (field.value.length > length) {
    return true;
  }
  field.classList.add('is-invalid');
  createErrorElement(field, message);
  return false;
};

const inputRemoveErrorHandler = ({target}) => {
  target.classList.remove('is-invalid');
  target.parentNode.querySelector('.form__error-message').remove();
};

const inputRemoveError = () => {
  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', inputRemoveErrorHandler);
  });
};

const checkNameField = () => {
  return checkFieldLength(nameInput, minNameLength, messageError.nameError);
};

const checkPhoneField = () => {
  return checkFieldLength(phoneInput, minPhoneLength, messageError.phoneError);
};

const checkСheckbox = () => {
  if (checkboxInput.checked) {
    return true;
  }
  checkboxInput.classList.add('is-invalid');
  return false;
};

const validateInputs = () => {
  const flagName = checkNameField();
  const flagPhone = checkPhoneField();
  const flagСheckbox = checkСheckbox();
  if (!flagName || !flagPhone || !flagСheckbox) {
    return false;
  }
  return true;
};

const formInputHandler = (evt) => {
  evt.preventDefault();
  if (validateInputs()) {
    evt.target.reset();
    evt.target.submit();
  }
};

export const initFormValidate = () => {
  if (!form) {
    return;
  }
  initPhoneMask();
  inputRemoveError();
  form.addEventListener('submit', formInputHandler);
};
