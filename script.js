const player = new Plyr("video", { captions: { active: true } });
const btn_menu = document.querySelector(".left");
const current_langue = "EN";
const menu = document.querySelector(".header-left-menu-langue");

// Expose player so it can be used from the console
window.player = player;
var skillPers = document.querySelectorAll(".skill-per");

btn_menu.addEventListener("click", function () {
  menu.classList.toggle("open");
});
menu.addEventListener("click", function () {
  menu.classList.remove("header-left-menu-langue open");
});
skillPers.forEach(function (skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";

  var animatedValue = 0;
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }

  requestAnimationFrame(animate);
});
