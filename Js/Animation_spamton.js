const animatedElement = document.querySelector('.Sp_r');
const hiddenElement = document.querySelector('.hidden');
const hiddenElement2 = document.querySelector('.hidden_d');

animatedElement.addEventListener('animationend', () => {
    hiddenElement.classList.remove('hidden');
});

const imageElement2 = document.getElementById('Sc-d');
imageElement2.addEventListener('click', handleImageClick);
function handleImageClick() {
  hiddenElement2.classList.remove('hidden_d');
}

const image = document.getElementById('Sc-d');

image.addEventListener('click', function() {
  const animationElement2 = document.createElement('div');
  animationElement2.classList.add('animation');
  image.parentNode.replaceChild(animationElement2, image);
});

