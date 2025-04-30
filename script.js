// Example: add fade-in effects as you scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

VANTA.NET({
  el: "#vanta-bg", // match the div ID
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa199dc,
  backgroundColor: 0x1a102f,
  points: 20.00,
  maxDistance: 35.00,
  spacing: 7.00
});



