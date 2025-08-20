 document.addEventListener('DOMContentLoaded', () => {
      const container = document.querySelector('.img-container');
      if (!container) return;

      // prevent double initialization if script accidentally runs twice
      if (container.dataset.carouselInit === '1') return;
      container.dataset.carouselInit = '1';

      const imgs = Array.from(container.querySelectorAll('.imgs'));
      if (!imgs.length) return;

      // start on the image that has the 'active' class, otherwise first image
      let cur = imgs.findIndex(img => img.classList.contains('active'));
      if (cur === -1) cur = 0;

      // ensure only the current image has the active class/visible opacity on load
      const showImg = pos => {
        imgs.forEach((img, i) => {
          const isActive = i === pos;
          img.classList.toggle('active', isActive);
          img.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });
      };
      showImg(cur);

      // next image function (ES6 arrow)
      const nextImg = () => {
        cur = (cur + 1) % imgs.length;
        showImg(cur);
      };

      // run every 2000ms (2s)
      const intervalId = setInterval(nextImg, 2000);

      // clear interval on page unload (good practice)
      window.addEventListener('beforeunload', () => clearInterval(intervalId));
    });
