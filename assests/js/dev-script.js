//  top nave bar script
 document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('backdrop');

    mobileMenu.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');

    menuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('-translate-x-full');

      if (isOpen) {
        mobileMenu.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      } else {
        mobileMenu.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    function closeMenu() {
      mobileMenu.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });
  // <!-- End top nav bar -->

  // start counter script
function runCounter(id) {
    const el = document.getElementById(id);
    if (!el) return; // exit if element not found

    let original = el.innerText.trim();
    let numOnly = original.replace(/[^0-9]/g, "");
    let target = parseInt(numOnly);

    if (isNaN(target)) return;

    let current = 0;

    let duration = 8000; 
    let frameRate = 200;  
    let totalFrames = duration / frameRate;
    let increment = target / totalFrames;

    let timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        el.innerText = original;
        clearInterval(timer);
      } else {
        el.innerText =
          Math.floor(current).toLocaleString() +
          original.replace(/[0-9,]/g, "");
      }
    }, frameRate);
}

window.onload = () => {
    runCounter("counter1");
    runCounter("counter2");
    runCounter("counter3");
};

  // end counter script

  // <!-- Start Our Products -->
 const productCards = document.querySelectorAll('.product-card');
const productImage = document.getElementById('productImage');

if (productCards.length && productImage) {
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      productCards.forEach(c => {
        c.classList.remove('bg-primary', 'text-white', 'active');
        c.classList.add('bg-gray-100', 'text-gray-800');

        const whiteIcon = c.querySelector('.white-icon');
        const grayIcon = c.querySelector('.gray-icon');
        const descText = c.querySelector('.desc-text');

        if (whiteIcon) whiteIcon.classList.add('hidden');
        if (grayIcon) grayIcon.classList.remove('hidden');
        if (descText) descText.classList.add('hidden');
      });

      card.classList.add('bg-primary', 'text-white', 'active');
      card.classList.remove('bg-gray-100', 'text-gray-800');

      const whiteIcon = card.querySelector('.white-icon');
      const grayIcon = card.querySelector('.gray-icon');
      const descText = card.querySelector('.desc-text');

      if (whiteIcon) whiteIcon.classList.remove('hidden');
      if (grayIcon) grayIcon.classList.add('hidden');
      if (descText) descText.classList.remove('hidden');

      const imgSrc = card.getAttribute('data-img');
      if (productImage && imgSrc) productImage.src = imgSrc;
    });
  });
}
const mobileCards = document.querySelectorAll('.mobile-product-card');

if (mobileCards.length) {
  const firstCard = mobileCards[0];

  if (firstCard) {
    firstCard.classList.add('bg-primary', 'text-white');
    firstCard.classList.remove('bg-gray-100', 'text-gray-800');

    const desc = firstCard.querySelector('.mobile-card-desc');
    const image = firstCard.querySelector('.mobile-card-image');
    const imgTag = firstCard.querySelector('img');

    if (desc) desc.classList.remove('hidden');
    if (image) image.classList.remove('hidden');
    if (imgTag) imgTag.src = 'assests/img/icon/arrow-up-right-round.svg';
  }

  mobileCards.forEach(card => {
    card.addEventListener('click', () => {
      mobileCards.forEach(c => {
        if (c !== card) {
          c.classList.remove('bg-primary', 'text-white');
          c.classList.add('bg-gray-100', 'text-gray-800');

          const desc = c.querySelector('.mobile-card-desc');
          const image = c.querySelector('.mobile-card-image');
          const imgTag = c.querySelector('img');

          if (desc) desc.classList.add('hidden');
          if (image) image.classList.add('hidden');
          if (imgTag) imgTag.src = 'assests/img/icon/arrow-up-right-round-gray.svg';
        }
      });

      card.classList.add('bg-primary', 'text-white');
      card.classList.remove('bg-gray-100', 'text-gray-800');

      const desc = card.querySelector('.mobile-card-desc');
      const image = card.querySelector('.mobile-card-image');
      const imgTag = card.querySelector('img');

      if (desc) desc.classList.remove('hidden');
      if (image) image.classList.remove('hidden');
      if (imgTag) imgTag.src = 'assests/img/icon/arrow-up-right-round.svg';
    });
  });
}

// <!-- End Our Products -->

// Start faq section
const accordions = document.querySelectorAll('.accordion-item');

window.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.accordion-item');
  if (first) {
    const content = first.querySelector('.accordion-content');
    const icon = first.querySelector('.accordion-icon');
    first.classList.add('active', 'bg-[#1A70B4]', 'text-white');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(90deg)';
  }
});

accordions.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  header.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active', 'bg-[#1A70B4]', 'text-white');
      item.classList.add('bg-[#F9FAFB]', 'text-[#0B2239]');
      content.style.maxHeight = null;
      icon.style.transform = 'rotate(0deg)';
      return;
    }

    accordions.forEach((acc) => {
      acc.classList.remove('active', 'bg-[#1A70B4]', 'text-white');
      acc.classList.add('bg-[#F9FAFB]', 'text-[#0B2239]');
      acc.querySelector('.accordion-content').style.maxHeight = null;
      acc.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
    });

    item.classList.add('active', 'bg-[#1A70B4]', 'text-white');
    item.classList.remove('bg-[#F9FAFB]', 'text-[#0B2239]');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(45deg)';
  });
});
    // End faq section

    

    // End Our Clients slider
var swiper = new Swiper(".clientSlider", {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { 
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  },
});

