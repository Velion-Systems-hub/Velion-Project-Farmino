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
let currentProducts = 0;
const proDoted = document.querySelectorAll('.prodot');

const showProduct =(produced) =>{
  produce.forEach((e, i)=>{
    e.classList.toggle('active', i === produced);
    proDoted[i].classList.toggle('active', i === produced);
  });
}

const nextProduct = () => {
  currentProducts = (currentProducts + 1) % produce.length;
  showProduct(currentProducts);
}

let intervalid;

const startInterval = () => {
  intervalid = setInterval(nextProduct, 5000);
};

const resetInterval = () => {
  clearInterval(intervalid);
  startInterval();
};



//dotes click override
proDoted.forEach((dote, produced) =>{
  dote.addEventListener('click', () => {
    currentProducts = produced;
    showProduct(currentProducts);
    resetInterval(); //reset the transition timer when clicked
  });
});

startInterval(); //start auto-transition initially


//home button auto hover
const buttons = document.querySelectorAll('.auto-hover');
  let toggleIndex = 0;

  setInterval(() => {
    buttons.forEach(btn => btn.classList.remove('hovered'));
    buttons[toggleIndex].classList.add('hovered');
    toggleIndex = (toggleIndex + 1) % buttons.length;
  }, 2000); // Switch every 2 seconds

// video playuback
const videos = document.querySelectorAll('.video');
let currentIndes = 0;
const playBtn = document.getElementById('playBtn');

const playVideo = (indes) => {
  videos.forEach((video, i) => {
    video.pause();
    video.currentTime = 0;
    video.classList.remove('active');
  });

  const video = videos[indes];
  video.classList.add('active');
  video.play();

  video.onended = () => {
    const next = (indes + 1) % videos.length;
    playVideo(next);
  };
};

playBtn.addEventListener('click', () => {
  playBtn.style.display = 'none';
  playVideo(currentIndes);
});
