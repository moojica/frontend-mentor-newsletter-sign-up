const form = document.querySelector('.newsletter-form');
const invalidEmailSpan = document.getElementById('invalid-email-text');
const input = document.getElementById('email');

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
  }
});

function validEmail() {
  const email = document.getElementById('email').value;
  const reg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  return reg.test(email);
}
