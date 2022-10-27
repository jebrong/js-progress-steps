const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let stage = 1;

next.addEventListener("click", () => {
  stage++;
  stage >= 4 && (stage = 4);
  update();
});

prev.addEventListener("click", () => {
  stage--;
  stage < 1 && (stage = 1);
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < stage) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(progress.style.width);
  if (stage > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
};
