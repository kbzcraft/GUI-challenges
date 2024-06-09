const range = document.querySelector("#range");
const body = document.querySelector("body");
range.addEventListener("input", (e) => {
  body.style.setProperty(`--pos`, `${e.target.value}%`);
});
