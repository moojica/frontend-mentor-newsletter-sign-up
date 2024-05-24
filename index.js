const form = document.querySelector('.newsletter-form');
const invalidEmailSpan = document.getElementById('invalid-email-text');
const input = document.getElementById('email');
const dissmissButton = document.getElementById('dissmiss-btn');
const successPage = document.getElementById('success-page');
const newsletter = document.getElementById('newsletter');
const userEmail = document.getElementById('user-email');

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

    const email = input.value;

    userEmail.innerText = email;

    successPage.classList.add('success-page');
    newsletter.classList.add('hidden');
  }
});

dissmissButton.addEventListener('click', function () {
  // Show newsletter form
  newsletter.classList.remove('hidden');

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
