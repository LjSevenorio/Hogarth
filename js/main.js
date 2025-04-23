
window.addEventListener("load", function () {
  const img = document.querySelector(".animate-img");
  const bg00 = document.querySelector(".background00");
  const frame01 = document.querySelector(".frame01");
  const frame02 = document.querySelector(".frame02");
  const frame04 = document.querySelector(".frame04");
  const symbol01 = document.querySelector(".symbol01");
  const symbol02 = document.querySelector(".symbol02");
  const symbol03 = document.querySelector(".symbol03");
  const frame05 = document.querySelector(".frame05");
  const frame06 = document.querySelector(".frame06");
  const frame07 = document.querySelector(".frame07");
  const frame08 = document.querySelector(".frame08");
  const frame09 = document.querySelector(".frame09");
  const frame10 = document.querySelector(".frame10");
  const frame12 = document.querySelector(".frame12");
  const frame13 = document.querySelector(".frame13");
  img.classList.add("loaded");

  setTimeout(() => {
    img.classList.add("wiggle");
  }, 800);

  setTimeout(() => {
    img.classList.remove("wiggle");
  }, 1300);

  setTimeout(() => {
    bg00.style.opacity = 0;
    bg00.style.transition = "opacity 0.4s ease";
  }, 1500);

  setTimeout(() => {
    frame01.style.opacity = 0;
    frame01.style.transition = "opacity 0.4s ease";
  }, 1500);

  setTimeout(() => {
    frame02.style.transform = "translateX(-60px)";
    frame02.style.transition = "transform 1s ease";
  }, 1600);

  setTimeout(() => {
    frame04.style.opacity = 1;
    frame04.style.transition = "opacity 0.4s ease";
  }, 1700);

  setTimeout(() => {
    symbol01.classList.add("bounce");
    symbol02.classList.add("bounce");
    symbol03.classList.add("bounce");
  }, 1800);

  setTimeout(() => {
    frame05.style.opacity = 1;
    frame05.style.transform = "translateX(-122px)";
    frame05.style.transition = "transform 1s ease";
  }, 2000);

  setTimeout(() => {
    frame06.style.opacity = 1;
    frame06.style.transform = "translateX(-110px)";
    frame06.style.transition = "transform 1s ease";
  }, 2300);

  setTimeout(() => {
    frame07.classList.add("slide-in");
  }, 3500);

  setTimeout(() => {
    frame08.classList.add("slide-up");
  }, 4300);

  setTimeout(() => {
    frame09.style.opacity = 1;
    frame09.style.transition = "opacity 0.4s ease";
  }, 5000);

  setTimeout(() => {
    frame10.style.transform = "translateX(179px)";
    frame10.style.transition = "transform 0.5s ease";
  }, 5500);

  const sentence = "summer’s biggest events​​";
  const container = document.querySelector(".frame11");
  const words = sentence.split(" ");

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = `word ${index % 2 === 0 ? "even" : "odd"}`;
    span.textContent = word;
    container.appendChild(span);
  });

  setTimeout(() => {
    const spans = document.querySelectorAll(".word");
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("show");
      }, index * 300);
    });
  }, 6000);

  setTimeout(() => {
    frame12.style.transform = "translateX(153px)";
    frame12.style.transition = "transform 1s ease";
  }, 7000);

  setTimeout(() => {
    frame13.style.opacity = 1;
    frame13.style.transition = "opacity 0.4s ease";
  }, 8000);
});
