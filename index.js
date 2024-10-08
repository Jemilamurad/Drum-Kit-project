const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");
const crash = new Audio("sounds/crash.mp3");
const kick = new Audio("sounds/kick-bass.mp3");
const snare = new Audio("sounds/snare.mp3");

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "w":
        tom1.play();
        break;
      case "a":
        tom2.play();
        break;
      case "s":
        tom3.play();
        break;
      case "d":
        tom4.play();
        break;
      case "j":
        crash.play();
        break;
      case "k":
        kick.play();
        break;
      case "l":
        snare.play();
        break;
      default:
        break;
    }

    addClassToButtons(this.innerHTML);
  });
});
document.addEventListener("keydown", (event) => {
  // if (event.key === "w") {
  //   tom1.play();
  // } else if (event.key === "a") {
  //   tom2.play();
  // } else if (event.key === "s") {
  //   tom3.play();
  // } else if (event.key === "d") {
  //   tom4.play();
  // } else if (event.key === "j") {
  //   crash.play();
  // } else if (event.key === "k") {
  //   kick.play();
  // } else if (event.key === "l") {
  //   snare.play();
  // }

  switch (event.key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      kick.play();
      break;
    case "l":
      snare.play();
      break;
    default:
      break;
  }
  addClassToButtons(event.key);
});

function addClassToButtons(btn) {
  const activeBtn = document.querySelector("." + btn);

  activeBtn.classList.add("pressed");

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
