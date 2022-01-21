const promoButton = document.querySelector('.promo__button');

const setScroll = (link) => {
  const SPEED = 0.25;
  const anchor = document.querySelector(link.getAttribute('href'));
  const coordAnchor = anchor.getBoundingClientRect().top;
  const windowY = window.pageYOffset;
  let start = null;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }
    let progress = time - start;

    let coordY =
      coordAnchor < 0
        ? Math.max(windowY - progress / SPEED, windowY + coordAnchor)
        : Math.min(windowY + progress / SPEED, windowY + coordAnchor);

    window.scrollTo(0, coordY);
    if (coordY !== windowY + coordAnchor) {
      requestAnimationFrame(step);
    }
  }
};

export const setScrollLink = () => {
  if (!promoButton) {
    return;
  }
  promoButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    setScroll(promoButton);
  });
};
