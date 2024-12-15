const sControllerButton1 = document.querySelector("[id=\'1\']")
const sControllerButton2 = document.querySelector("[id=\'2\']");
const sControllerButton3 = document.querySelector("[id=\'3\']");
// console.log(sControllerButton1);

let indexButton = 1

function execWithTimeout(){
  if (indexButton ==1) {
    selectCarouselItem(sControllerButton1)
    indexButton+=1
  } else if(indexButton ==2) {
    selectCarouselItem(sControllerButton2)
    indexButton+=1
  }else if(indexButton ==3) {
    selectCarouselItem(sControllerButton3)
    indexButton=1
  }
  setTimeout(execWithTimeout, 10000);
}
setTimeout(execWithTimeout, 100);


function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}