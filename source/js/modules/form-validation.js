import {initPhoneMask} from './phone-mask.js';

const forms = document.querySelectorAll('.form form');

const MIN_NAME_LENGTH = 1;
const MIN_PHONE_LENGTH = 17;


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

const checkCheckBox = (checkBox) => {
  if (checkBox.checked) {
    return true;
  }
  checkBox.classList.add('is-invalid');
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
  const checkBoxInput = form.querySelector('.form__checkbox input');
  const textarea = form.querySelector('.form__textarea textarea');

  const flagName = checkFieldLength(nameInput, MIN_NAME_LENGTH);
  const flagPhone = checkFieldLength(phoneInput, MIN_PHONE_LENGTH);
  const flagCheckBox = checkCheckBox(checkBoxInput);
  const flagTextarea = checkTextarea(textarea);


  if (!flagName || !flagPhone || !flagCheckBox || !flagTextarea) {
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
