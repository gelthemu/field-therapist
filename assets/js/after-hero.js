// afterHero - with the Intersection Observer API implemented
document.addEventListener("DOMContentLoaded", function () {
  const statsSection = document.querySelector(".afterHero-stats-content");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function animateNumbers(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(
        progress * (end - start) + start
      ).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = statsSection.querySelectorAll(
          ".afterHero-stat-number span"
        );
        const targets = [190000, 500, 2000];
        statNumbers.forEach((numberElement, index) => {
          animateNumbers(numberElement, 50, targets[index], 2000);
        });
        observer.unobserve(statsSection);
      }
    });
  }

  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );
  observer.observe(statsSection);
});
