const textContainer = document.querySelector('.text');
var textToAnimate = "Здраствуйте, я - Спамтон Г Спамтон, [[Лучший продавец номер one]]!";

let currentIndex = 0;

function animateText() {
  if (currentIndex < textToAnimate.length) {
    const currentChar = textToAnimate.charAt(currentIndex);
    const charSpan = document.createElement('span');
    charSpan.textContent = currentChar === ' ' ? ' ' : currentChar;
    textContainer.appendChild(charSpan);

    currentIndex++;
    setTimeout(animateText, currentChar === ' ' ? 50 : 100);
  }
}

const imageElement = document.getElementById('Sc-d');
imageElement.addEventListener('click', handleImageClick);
function handleImageClick() {
    animateText();
}


