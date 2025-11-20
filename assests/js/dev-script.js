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

    // <!-- Start Our Products -->
  const productCards = document.querySelectorAll('.product-card');
  const productImage = document.getElementById('productImage');

  productCards.forEach(card => {
    card.addEventListener('click', () => {

      productCards.forEach(c => {
        c.classList.remove('bg-primary', 'text-white', 'active');
        c.classList.add('bg-gray-100', 'text-gray-800');
        c.querySelector('.white-icon').classList.add('hidden');
        c.querySelector('.gray-icon').classList.remove('hidden');
        c.querySelector('.desc-text').classList.add('hidden');
      });

      card.classList.add('bg-primary', 'text-white', 'active');
      card.classList.remove('bg-gray-100', 'text-gray-800');
      card.querySelector('.white-icon').classList.remove('hidden');
      card.querySelector('.gray-icon').classList.add('hidden');
      card.querySelector('.desc-text').classList.remove('hidden');

      const imgSrc = card.getAttribute('data-img');
      productImage.src = imgSrc;
    });
  });


   const mobileCards = document.querySelectorAll('.mobile-product-card');

  const firstCard = mobileCards[0];
  firstCard.classList.add('bg-primary', 'text-white');
  firstCard.classList.remove('bg-gray-100', 'text-gray-800');
  firstCard.querySelector('.mobile-card-desc').classList.remove('hidden');
  firstCard.querySelector('.mobile-card-image').classList.remove('hidden');
  firstCard.querySelector('img').src = 'assests/img/icon/arrow-up-right-round.svg';

  mobileCards.forEach(card => {
    card.addEventListener('click', () => {
      mobileCards.forEach(c => {
        if (c !== card) {
          c.classList.remove('bg-primary', 'text-white');
          c.classList.add('bg-gray-100', 'text-gray-800');

          c.querySelector('.mobile-card-desc').classList.add('hidden');
          c.querySelector('.mobile-card-image').classList.add('hidden');
          c.querySelector('img').src = 'assests/img/icon/arrow-up-right-round-gray.svg';
        }
      });

      card.classList.add('bg-primary', 'text-white');
      card.classList.remove('bg-gray-100', 'text-gray-800');

      card.querySelector('.mobile-card-desc').classList.remove('hidden');
      card.querySelector('.mobile-card-image').classList.remove('hidden');
      card.querySelector('img').src = 'assests/img/icon/arrow-up-right-round.svg';
    });
  });
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

    // Otherwise → close all others first
    accordions.forEach((acc) => {
      acc.classList.remove('active', 'bg-[#1A70B4]', 'text-white');
      acc.classList.add('bg-[#F9FAFB]', 'text-[#0B2239]');
      acc.querySelector('.accordion-content').style.maxHeight = null;
      acc.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
    });

    // Open the clicked one
    item.classList.add('active', 'bg-[#1A70B4]', 'text-white');
    item.classList.remove('bg-[#F9FAFB]', 'text-[#0B2239]');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(45deg)';
  });
});
    // End faq section

    
  var swiper = new Swiper(".clientSlider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { // Mobile view
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
