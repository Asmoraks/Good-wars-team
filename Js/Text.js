const textContainer = document.querySelector('.text');
var textToAnimate = "";
var dialognumber = 0;
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

function Textdialog(a) {
  textContainer.innerHTML = '';   
  currentIndex = 0;               
  textToAnimate = a;
  animateText();
}

function handleImageClick() {
  dialognumber++;
  if (dialognumber == 1) {
    Textdialog("Здраствуйте, я - Спамтон Г Спамтон, [[Лучший продавец номер one]]!");
  } else if (dialognumber == 2) {
    Textdialog("Я ваш [Помочь] в этом [Гиперссылка заблокированна]!");
  } else if (dialognumber == 3) {
    Textdialog("[Error 404] МАЙК НЕ ДРУГ......");
  } else if (dialognumber == 4) {
    Textdialog("Запомните не {доверять} [Телевизор]..... ОН ШАРЛОТАН");
  } else if (dialognumber == 5) {
    Textdialog("Ой.... неважно, я хотел сказать что я готов [Помощь]");
  } else if (dialognumber == 6) {
    Textdialog("Пароль {7camp219} Буду ждать вас на нашем [Гиперссылка заблокированна]!");
  
  }
}

const imageElement = document.getElementById('Sc-d');
