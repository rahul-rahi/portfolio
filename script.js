// Simple on-scroll fade-in (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeEls.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});

