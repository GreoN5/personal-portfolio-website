const menu = document.querySelector('.menu-items');
const menuLinks = document.querySelectorAll('.menu-link');
const arrow = document.querySelector('.arrow');
const backToTopButton = document.getElementById('backToTop');

const mobileBreakpoint = 480;

function isMobileView() {
  return window.innerWidth <= mobileBreakpoint;
}

function toggleMenu() {
  menu.classList.toggle('show');

  if (!isMobileView()) {
    return;
  }

  if (menu.classList.contains('show')) {
    arrow.classList.add('rotateUp');
    arrow.classList.remove('rotateDown');
  } else {
    arrow.classList.add('rotateDown');
    arrow.classList.remove('rotateUp');
  }
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isMobileView()) {
      menu.classList.remove('show');
      arrow.classList.add('rotateDown');
      arrow.classList.remove('rotateUp');
    }
  });
});

document.addEventListener('click', function (event) {
  const target = event.target;
  const isMenu = target === menu || menu.contains(target);
  const isArrow = target === arrow;
  const isMenuActive = menu.classList.contains('show');

  if (!isMenu && !isArrow && isMenuActive) {
    toggleMenu();
  }
});

document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // reset url if it is on some id tag
  history.pushState('', document.title, window.location.pathname + window.location.search);
});
