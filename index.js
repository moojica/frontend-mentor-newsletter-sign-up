const form = document.querySelector('.newsletter-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(validEmail());
});

function validEmail() {
  const email = document.getElementById('email').value;
  const reg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  return reg.test(email);
}
