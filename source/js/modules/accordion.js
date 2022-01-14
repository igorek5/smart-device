const buttons = document.querySelectorAll('.accordion-button');

const accordionButtonHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains('open')) {
    evt.target.classList.remove('open');
    return;
  }
  buttons.forEach((item) => {
    item.classList.remove('open');
  });
  evt.target.classList.add('open');
};

export const setAccordionControl = () => {
  buttons.forEach((button) => {
    button.classList.remove('open');
    button.addEventListener('click', accordionButtonHandler);
  });
};
