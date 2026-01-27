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