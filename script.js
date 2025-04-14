const hourEl = document.querySelector(".hour");
const date = document.querySelector(".date");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

toggleEl.addEventListener("click", function (e) {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});
const scale = function (num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
function setTime() {
  const time = new Date();
  const month = time.toLocaleString("it-IT", { month: "long" });
  const day = time.toLocaleString("it-IT", { day: "numeric" });
  const weekDay = time.toLocaleDateString("it-IT", { weekday: "long" });
  const hours = time.toLocaleString("it-IT", { hour: "numeric" });
  const hoursClock = hours % 12;
  const minutes = time.toLocaleString("it-IT", { minute: "numeric" });
  const seconds = time.toLocaleString("it-IT", { second: "numeric" });

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  date.innerHTML = `${weekDay}, ${day} ${month}`;
}
setTime();
setInterval(setTime, 1000);
