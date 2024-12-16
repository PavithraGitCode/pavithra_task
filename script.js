const elements = document.querySelectorAll('.cont-border, .box');
elements.forEach(contBorder => {
  const firstCont = contBorder.querySelector('.first-cont');   
  const offerContent = contBorder.querySelector('.offer-content');  
  const radioButton = contBorder.querySelector('input[type="radio"]');
  const allOfferContents = document.querySelectorAll('.offer-content');
  const allContBorders = document.querySelectorAll('.cont-border, .box');
  const allRadioButtons = document.querySelectorAll('input[type="radio"]');
  firstCont.addEventListener('click', function() {
    allOfferContents.forEach(content => {
      content.style.display = 'none';
    });
    allContBorders.forEach(border => {
      border.style.borderColor = '#C8C8C8';
      border.style.backgroundColor = '';  
    });
    allRadioButtons.forEach(radio => {
      radio.checked = false;
    });
    radioButton.checked = true;
    offerContent.style.display = (offerContent.style.display === 'block') ? 'none' : 'block';
    contBorder.style.borderColor = (contBorder.style.borderColor === 'rgb(255, 107, 130)') ? '#C8C8C8' : '#FF6B82';
    contBorder.style.backgroundColor = (contBorder.style.backgroundColor === 'rgb(255, 249, 250)') ? '' : '#FFF9FA';  
  });
});
