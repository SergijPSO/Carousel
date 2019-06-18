let allLiElements = document.querySelectorAll('li');

for (let i = 0; i < allLiElements.length; i++) {
  allLiElements[i].style.currentPosition = 'relative';
  let div = document.createElement('div');
  div.style.cssText = 'currentPosition:absolute;left:0;top:0';
  div.innerHTML = i + 1;
  allLiElements[i].appendChild(div);
}

let width = 130; 
let count = 3;
let currentPosition = 0;

let carousel = document.getElementById('carousel');
let allLiElementst = carousel.querySelector('ul');
let allLiElementstElems = carousel.querySelectorAll('li');

carousel.querySelector('.prev').addEventListener('click', () => {
  currentPosition = Math.min(currentPosition + width * count, 0)
  allLiElementst.style.marginLeft = currentPosition + 'px';
})

carousel.querySelector('.next').addEventListener('click', () => {
  currentPosition = Math.max(currentPosition - width * count, -width * (allLiElementstElems.length - count));
  allLiElementst.style.marginLeft = currentPosition + 'px';
})


