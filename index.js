const form = document.querySelector('.newsletter-form');
const invalidEmailSpan = document.getElementById('invalid-email-text');
const input = document.getElementById('email');
const dissmissButton = document.getElementById('dissmiss-btn');
const leftCard = document.getElementById('left-card');
const rightCard = document.getElementById('right-card');
const successPage = document.getElementById('success-page');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validEmail()) {
    invalidEmailSpan.classList.add('invalid');
    invalidEmailSpan.classList.remove('hidden');
    input.classList.add('invalid');
  } else {
    invalidEmailSpan.classList.remove('invalid');
    invalidEmailSpan.classList.add('hidden');
    input.classList.remove('invalid');

    successPage.classList.add('success-page');
    leftCard.classList.add('hidden');
    rightCard.classList.add('hidden');
  }
});

dissmissButton.addEventListener('click', function () {
  // Show newsletter form
  leftCard.classList.remove('hidden');
  rightCard.classList.remove('hidden');

  // reset email input field to be empty
  input.value = '';

  // hide success page
  successPage.classList.remove('success-page');
  successPage.classList.add('hidden');
});

function validEmail() {
  const email = document.getElementById('email').value;
  const reg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  return reg.test(email);
}
