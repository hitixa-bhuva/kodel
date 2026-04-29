// =======================
// FULL SCREEN LOADER SCRIPT
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("kodelLoader");

  if (loader) {
    loader.style.display = "flex";
    document.body.classList.add("overflow-hidden");
  }

  function hideLoader() {
    if (!loader) return;
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("overflow-hidden");
    }, 400);
  }

  // Hide as soon as page is fully loaded — no artificial delay
  window.addEventListener("load", hideLoader);
});


/* -------------------------------------------------
   1) Top Navbar Menu Script  (Runs after DOM loaded)
---------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('backdrop');

  if (mobileMenu) mobileMenu.classList.add('-translate-x-full');
  if (backdrop) backdrop.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');

  if (menuBtn) {
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
  }

  function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);
});


/* -------------------------------------------------
   2) FAQ Accordion Script (Runs after DOM loaded)
---------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach(acc => {
    const icon = acc.querySelector('.accordion-icon');
    icon.style.transform = 'rotate(45deg)';
  });

  const first = accordions[0];
  if (first) {
    const content = first.querySelector('.accordion-content');
    const icon = first.querySelector('.accordion-icon');

    first.classList.add('active', 'bg-[#1A70B4]', 'text-white');
    first.classList.remove('bg-[#F9FAFB]', 'text-[#0B2239]');

    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(0deg)'; 
  }

  accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    header.addEventListener('click', () => {

      const isActive = item.classList.contains('active');

      accordions.forEach(acc => {
        const c = acc.querySelector('.accordion-content');
        const i = acc.querySelector('.accordion-icon');

        acc.classList.remove('active', 'bg-[#1A70B4]', 'text-white');
        acc.classList.add('bg-[#F9FAFB]', 'text-[#0B2239]');

        c.style.maxHeight = null;
        i.style.transform = 'rotate(45deg)'; 
      });

      if (!isActive) {
        item.classList.add('active', 'bg-[#1A70B4]', 'text-white');
        item.classList.remove('bg-[#F9FAFB]', 'text-[#0B2239]');

        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(0deg)'; 
      }
    });
  });
});


/* -------------------------------------------------
   3) Product Cards Desktop + Mobile
---------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll('.product-card');
  const productImage = document.getElementById('productImage');

  if (productCards.length && productImage) {
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        productCards.forEach(c => {
          c.classList.remove('bg-primary', 'text-white', 'active');
          c.classList.add('bg-gray-100', 'text-gray-800');

          c.querySelector('.white-icon')?.classList.add('hidden');
          c.querySelector('.gray-icon')?.classList.remove('hidden');
          c.querySelector('.desc-text')?.classList.add('hidden');
        });

        card.classList.add('bg-primary', 'text-white', 'active');
        card.classList.remove('bg-gray-100', 'text-gray-800');

        card.querySelector('.white-icon')?.classList.remove('hidden');
        card.querySelector('.gray-icon')?.classList.add('hidden');
        card.querySelector('.desc-text')?.classList.remove('hidden');

        const imgSrc = card.getAttribute('data-img');
        if (imgSrc) productImage.src = imgSrc;
      });
    });
  }

  // Mobile Cards
  const mobileCards = document.querySelectorAll('.mobile-product-card');

  if (mobileCards.length) {
    const firstCard = mobileCards[0];
    firstCard.classList.add('bg-primary', 'text-white');
    firstCard.querySelector('.mobile-card-desc')?.classList.remove('hidden');
    firstCard.querySelector('.mobile-card-image')?.classList.remove('hidden');
    if (firstCard.querySelector('img'))
      firstCard.querySelector('img').src = 'assests/img/icon/arrow-up-right-round.svg';

    mobileCards.forEach(card => {
      card.addEventListener('click', () => {
        mobileCards.forEach(c => {
          if (c !== card) {
            c.classList.remove('bg-primary', 'text-white');
            c.classList.add('bg-gray-100', 'text-gray-800');

            c.querySelector('.mobile-card-desc')?.classList.add('hidden');
            c.querySelector('.mobile-card-image')?.classList.add('hidden');
            if (c.querySelector('img'))
              c.querySelector('img').src = 'assests/img/icon/arrow-up-right-round-gray.svg';
          }
        });

        card.classList.add('bg-primary', 'text-white');
        card.classList.remove('bg-gray-100', 'text-gray-800');

        card.querySelector('.mobile-card-desc')?.classList.remove('hidden');
        card.querySelector('.mobile-card-image')?.classList.remove('hidden');
        if (card.querySelector('img'))
          card.querySelector('img').src = 'assests/img/icon/arrow-up-right-round.svg';
      });
    });
  }
});

/* -------------------------------------------------
   5) Search Input Typing Script
---------------------------------------------------*/
(function () {
  const input = document.getElementById('searchInput');
  if (!input) return;

  const texts = [
    "Search products",
    "Full-Grain Leather",
    "Garment Leather",
    "Footwear Leather",
    "Bag & Accessory Leather",
    "Upholstery Leather",
    "Search all type Leather products"
  ];

  const typingSpeed = 100;
  const pauseTime = 2000;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentText = texts[textIndex];
    if (!isDeleting && charIndex <= currentText.length) {
      input.placeholder = currentText.slice(0, charIndex++);
      setTimeout(typeLoop, typingSpeed);
    }
    else if (isDeleting && charIndex >= 0) {
      input.placeholder = currentText.slice(0, charIndex--);
      setTimeout(typeLoop, typingSpeed / 2);
    }
    else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeLoop, pauseTime);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeLoop, typingSpeed);
      }
    }
  }

  typeLoop();
})();


/* -------------------------------------------------
   6) Swiper Sliders (Load After Swiper Script)
---------------------------------------------------*/

/* -------------------------------------------------
   6) home page and aboput us page certificatio setion zoom 
---------------------------------------------------*/
const triggers = document.querySelectorAll('.js-zoom-trigger');
const modal = document.getElementById('zoomModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeModal');

// Function to open the modal
function openModal(imageSrc, altText) {
    modalImage.src = imageSrc;
    modalImage.alt = altText;
    modal.classList.remove('hidden'); // Show the structure
    // Small delay before adding opacity for the transition effect
    setTimeout(() => {
        modal.classList.add('opacity-100');
    }, 10);
}

// Function to close the modal
function closeModal() {
    modal.classList.remove('opacity-100'); // Trigger transition out
    // Wait for transition (300ms) before hiding completely
    setTimeout(() => {
        modal.classList.add('hidden');
        modalImage.src = ''; // Clear source to save bandwidth/reset
    }, 300);
}

// Add click event listeners to all certificate images
triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
        // Find the <img> inside the clicked container
        const img = this.querySelector('img');
        openModal(img.src, img.alt);
    });
});

// Close modal when clicking the 'X' button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the image (on the dark background)
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal when pressing the Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


/* -------------------------------------------------
   7) Counter Script - Runs After Full Page Load
---------------------------------------------------*/
function runCounter(id) {
  const el = document.getElementById(id);
  if (!el) return;

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


/* -------------------------------------------------
   8) our blog page 
---------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.category-btn');
  const blogs = document.querySelectorAll('.blog-item');

  // Guard clause: If there are no tabs, don't run the script
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // 1. Update Active State for Tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 2. Filter Blog Items
      blogs.forEach(blog => {
        // Ensure data-category exists on the blog item to avoid errors
        const blogCategoryAttr = blog.dataset.category || "";
        const categories = blogCategoryAttr.split(' ');

        if (category === "All" || categories.includes(category)) {
          blog.style.display = "flex";
        } else {
          blog.style.display = "none";
        }
      });
    });
  });

  // Safe way to set the initial state:
  // We try to find the "All" button specifically. 
  // If it's not found, we fall back to the first tab available.
  const initialTab = document.querySelector('.category-btn[data-category="All"]') || tabs[0];
  
  if (initialTab) {
    initialTab.click(); // This triggers the logic above automatically
  }
});
