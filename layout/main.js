var tempo = 588 * 1000

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
   event.addEventListener('click', () => {
      if (event.classList.contains("active")) {
         event.classList.remove("active");
      } else {
         event.classList.add("active");
      }
   })
})

function addClass(element, className) {
   if (element.classList) {
     element.classList.add(className);
   } else {
     element.className += " " + className;
   }
}
 
function removeClass(element, className) {
   if (element.classList) {
     element.classList.remove(className);
   } else {
     element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
   }
}

function playPause() {
   var video = document.getElementById("myVideo");
   var button = document.getElementById("playPause"); // Adicione esta linha

   // addClass(button, "animation"); // Adicione esta linha
   
   if (video.paused) {
      video.play();
      removeClass(button, "paused"); // Adicione esta linha
      removeClass(button, "animationShow"); // Adicione esta linha
      addClass(button, "animationHide"); // Adicione esta linha
   } else {
      video.pause();
      addClass(button, "paused"); // Adicione esta linha
      removeClass(button, "animationHide"); // Adicione esta linha
      addClass(button, "animationShow"); // Adicione esta linha
   }
}

const TIME_TO_SHOW_BUTTON = 2; // 588 seconds;
const video = document.getElementById('myVideo');

video.addEventListener('timeupdate', function showButton() {
  if (video.currentTime > TIME_TO_SHOW_BUTTON) {
    // your logic to show the button
    document.getElementById("chamada").style.display = "flex";
    video.removeEventListener('timeupdate', showButton);
  }
});