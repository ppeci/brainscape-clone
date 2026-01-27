const dropdowns = document.querySelectorAll(".dropdown-toggle");

dropdowns.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = toggle.parentElement;

    // close other dropdowns
    document.querySelectorAll(".dropdown").forEach(item => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    // toggle current
    parent.classList.toggle("active");
  });
});

// close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(item => {
      item.classList.remove("active");
    });
  }
});

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroBottom = hero.offsetHeight - 80;

  if (window.scrollY > heroBottom) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
/*mobile*/

/* */
/* AI feature image swap */
const features = document.querySelectorAll(".ai-feature");
const previewImage = document.getElementById("aiPreview");

features.forEach((feature) => {
  feature.addEventListener("mouseenter", () => {
    // remove active state
    features.forEach((f) => f.classList.remove("active"));

    // add active to hovered
    feature.classList.add("active");

    // swap image
    const newImage = feature.getAttribute("data-image");
    previewImage.src = newImage;
  });
});

/* */

/* FAQ accordion */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".toggle");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // close all
    faqItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".toggle").textContent = "+";
    });

    // open clicked one
    if (!isOpen) {
      item.classList.add("active");
      button.textContent = "−";
    }
  });
});

