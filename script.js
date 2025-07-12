const containers = document.querySelectorAll('.carousel-container');
const dots = document.querySelectorAll('.dot');
let current = 0;

const showContainer = (index) => {
  containers.forEach((c, i) => {
    c.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

const nextContainer = () => {
  current = (current + 1) % containers.length;
  showContainer(current);
}

// Start auto-change every 3 seconds
setInterval(nextContainer, 3000);

// Dot click override
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    current = index;
    showContainer(current);
  });
});

//for rediscovered tastes images
const produce = document.querySelectorAll('.products');
let currentProducts =0;

const showProduct =(produced) =>{
  produce.forEach((e, i)=>{
    e.classList.toggle('active', i === produced);
    dots[i].classList.toggle('active', i === produced);
  });
}

const nextProduct = () => {
  currentProducts = (currentProducts + 1) % produce.length;
  showProduct(currentProducts);
}

setInterval(nextProduct, 5000);

//home button auto hover
const buttons = document.querySelectorAll('.auto-hover');
  let toggleIndex = 0;

  setInterval(() => {
    buttons.forEach(btn => btn.classList.remove('hovered'));
    buttons[toggleIndex].classList.add('hovered');
    toggleIndex = (toggleIndex + 1) % buttons.length;
  }, 2000); // Switch every 2 seconds

