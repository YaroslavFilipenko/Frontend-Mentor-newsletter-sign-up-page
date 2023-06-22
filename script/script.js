document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.querySelector('.form__input');
  const formButton = document.querySelector('.form__button');
  const errorMessage = document.querySelector('.form__error');
  const subscribePage = document.querySelector('.subscribe-page');
  const successPage = document.querySelector('.success-page');
  const successButton = document.querySelector('.success__button');
  const emailSpan = document.querySelector('.emailSpan');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (emailInput.value === '' || !emailPattern.test(emailInput.value)) {
      emailInput.classList.add('error');
      errorMessage.style.display = 'flex';
    } else {
      emailInput.classList.remove('error');
      errorMessage.style.display = 'none';
      subscribePage.style.display = 'none';
      successPage.style.display = 'block';

      const email = emailInput.value;
      emailSpan.textContent = email;
      emailInput.value = '';
    }
  });

  successButton.addEventListener('click', function() {
    subscribePage.style.display = 'flex';
    successPage.style.display = 'none';
    emailSpan.textContent = '';
  });
});