import {initPhoneMask} from './phone-mask.js';

const form = document.querySelector('.feedback form');
const nameInput = document.querySelector('.feedback__field--name input');
const phoneInput = document.querySelector('.feedback__field--phone input');
const checkboxInput = document.querySelector('.form__personal-checkbox input');

const minNameLength = 1;
const minPhoneLength = 17;

const checkFieldLength = (field, length) => {
  if (field.value.length > length) {
    return true;
  }
  field.classList.add('is-invalid');
  return false;
};

const inputRemoveErrorHandler = (evt) => evt.target.classList.remove('is-invalid');

const inputRemoveError = () => {
  form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', inputRemoveErrorHandler);
  });
};

const checkNameField = () => {
  return checkFieldLength(nameInput, minNameLength);
};

const checkPhoneField = () => {
  return checkFieldLength(phoneInput, minPhoneLength);
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
