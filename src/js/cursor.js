const cursor = document.querySelector('.cursor-outer');
const cursorinner = document.querySelector('.cursor-inner');
const targets = document.querySelectorAll([
  'a',
  '.btn',
  "[type='button']",
  'input',
  'textarea',
]);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursorinner.style.left = `${x}px`;
  cursorinner.style.top = `${y}px`;
});

targets.forEach((item) => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('link-hover');
    cursorinner.classList.add('link-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('link-hover');
    cursorinner.classList.remove('link-hover');
  });
});
