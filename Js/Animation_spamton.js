const animatedElement = document.querySelector('.Sp_r');
const hiddenElement = document.querySelector('.hidden');

animatedElement.addEventListener('animationend', () => {
    hiddenElement.classList.remove('hidden');
});

const image = document.getElementById('Sc-d');

image.addEventListener('click', function() {
  const animationElement2 = document.createElement('div');
  animationElement2.classList.add('animation');
  animationElement2.addEventListener('click', handleImageClick);
  image.parentNode.replaceChild(animationElement2, image);
  //Переносим обработку диалогов сюда
  handleImageClick();
});



