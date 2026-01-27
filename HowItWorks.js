/* AI feature image swap */
document.querySelectorAll(".ai-flashcards").forEach(section => {
  const features = section.querySelectorAll(".ai-feature");
  const previewImage = section.querySelector(".ai-image img");

  features.forEach(feature => {
    feature.addEventListener("mouseenter", () => {
      // remove active from this section only
      features.forEach(f => f.classList.remove("active"));

      // activate current
      feature.classList.add("active");

      // swap image
      const newImage = feature.dataset.image;
      previewImage.src = newImage;
    });
  });
});
