$(document).ready(function() {
    const emailInput = $('.form__input');
    const formButton = $('.form__button');
    const errorMessage = $('.form__error');
    const subscribePage = $('.subscribe-page');
    const successPage = $('.success-page');
    const successButton = $('.success__button');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    formButton.on('click', function(e) {
      e.preventDefault();
  
    if (emailInput == '' || !emailPattern.test(emailInput.val())) {
        emailInput.addClass('error');
        errorMessage.css('display', 'flex');
    } else {
        emailInput.removeClass('error');
        errorMessage.css('display', 'none');
        subscribePage.css('display', 'none');
        successPage.css('display', 'block');
        form.reset();
    }
    });

    successButton.on('click', () => {
        subscribePage.css('display', 'flex');
        successPage.css('display', 'none');
    })
});