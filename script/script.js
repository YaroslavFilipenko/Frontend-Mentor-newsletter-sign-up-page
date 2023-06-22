document.addEventListener('DOMContentLoaded', function() {
  const formButton = document.querySelector('.form__button');
  const emailInput = document.querySelector('.form__input');
  const errorMessage = document.querySelector('.form__error');
  const subscribePage = document.querySelector('.subscribe-page');
  const successPage = document.querySelector('.success-page');
  const successButton = document.querySelector('.success__button');
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
      document.forms[0].reset();
    }
  });

  successButton.addEventListener('click', () => {
    subscribePage.style.display = 'flex';
    successPage.style.display = 'none';
  })
});