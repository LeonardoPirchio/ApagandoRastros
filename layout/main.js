/* ========================
* ======== Perguntas ========
=========================== */
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

/* ========================
* ======== Classes ========
=========================== */
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

/* ========================
* ======== Animação ========
=========================== */
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

/* ========================
* ======== Chamada ========
=========================== */
const TIME_TO_SHOW_BUTTON = 582; // 588 seconds;
const video = document.getElementById('myVideo');

video.addEventListener('timeupdate', function showButton() {
  if (video.currentTime > TIME_TO_SHOW_BUTTON) {
    document.getElementById("chamada").style.display = "flex";
    document.getElementById("perguntas").style.display = "block";
    video.removeEventListener('timeupdate', showButton);
  }
});

/* ========================
* ======== Tela Cheia ========
=========================== */
window.addEventListener("orientationchange", function() {
   var videoWrapper = document.getElementById("videoWrapper");
   var video = document.getElementById("myVideo");

   // Selecione o elemento de vídeo
   var video = document.querySelector("#myVideo");

   // Verifique a orientação da tela
   if (screen.orientation.angle === 0) {
      // A tela está na posição vertical
      removeClass(videoWrapper, "fullscreen");
      removeClass(video, "fullscreen");
      document.getElementById("playPauseButton").style.position = "relative";
      document.getElementById("Teste").style.position = "absolute";
   } else {
      addClass(videoWrapper, "fullscreen");
      addClass(video, "fullscreen");
      document.getElementById("playPauseButton").style.position = "fixed";
      document.getElementById("Teste").style.position = "fixed";
   }
   
});

/* ========================
* ======== Google Analytics ========
=========================== */

// Inicie o rastreamento quando o vídeo for carregado
video.addEventListener("loadedmetadata", function() {
   fbq('trackCustom', 'Loaded');
   gtag('event', 'loaded', {'event_category': 'Video','event_label': 'Loaded','value':'Video-01'});
//   console.log('Loaded')
});

// Rastreie a reprodução do vídeo
video.addEventListener("play", function() {
   fbq('trackCustom', 'Play');
   gtag('event', 'play', {'event_category': 'Video','event_label': 'Play','value':'Video-01'});
//   console.log('Play')
});

// Rastreie a pausa do vídeo
video.addEventListener("pause", function() {
   fbq('trackCustom', 'Pause');
   gtag('event', 'pause', {'event_category': 'Video','event_label': 'Pause','value':'Video-01'});
//   console.log('Pause')
});

// Rastreie o final do vídeo
video.addEventListener("ended", function() {
   fbq('trackCustom', 'Ended');
   gtag('event', 'ended', {'event_category': 'Video','event_label': 'Ended','value':'Video-01'});
//   console.log('Ended')
});

/* ========================
* ======== Video ========
=========================== */
video.addEventListener("timeupdate", video_10seg);
video.addEventListener("timeupdate", video_01min);
video.addEventListener("timeupdate", video_02min);
video.addEventListener("timeupdate", video_03min);
video.addEventListener("timeupdate", video_04min);
video.addEventListener("timeupdate", video_05min);
video.addEventListener("timeupdate", video_06min);
video.addEventListener("timeupdate", video_07min);
video.addEventListener("timeupdate", video_08min);
video.addEventListener("timeupdate", retencao_Oferta);
// const whatsapp = document.getElementById("whatsapp");

function video_10seg(){
   var timePassed = video.currentTime;
   if (timePassed >= 10 && timePassed < 60) {
      fbq('trackCustom', 'Tempo_10seg');
      gtag('event', 'Tempo_10seg', {'event_category': 'Video','event_label': 'Tempo_10seg','value':'Video-01'});
      video.removeEventListener("timeupdate", video_10seg);
   }
}
function video_01min(){
   var timePassed = video.currentTime;
   if (timePassed >= 60 && timePassed < 120) {
      fbq('trackCustom', 'Tempo_01min');
      gtag('event', 'Tempo_01min', {'event_category': 'Video','event_label': 'Tempo_01min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_01min);
   }
}
function video_02min(){
   var timePassed = video.currentTime;
   if (timePassed >= 120 && timePassed < 180) {
      fbq('trackCustom', 'Tempo_02min');
      gtag('event', 'Tempo_02min', {'event_category': 'Video','event_label': 'Tempo_02min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_02min);
   }
}
function video_03min(){
   var timePassed = video.currentTime;
   if (timePassed >= 180 && timePassed < 240) {
      fbq('trackCustom', 'Tempo_03min');
      gtag('event', 'Tempo_03min', {'event_category': 'Video','event_label': 'Tempo_03min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_03min);
   }
}
function video_04min(){
   var timePassed = video.currentTime;
   if (timePassed >= 240 && timePassed < 300) {
      fbq('trackCustom', 'Tempo_04min');
      gtag('event', 'Tempo_04min', {'event_category': 'Video','event_label': 'Tempo_04min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_04min);
   }
}
function video_05min(){
   var timePassed = video.currentTime;
   if (timePassed >= 300 && timePassed < 360) {
      fbq('trackCustom', 'Tempo_05min');
      gtag('event', 'Tempo_05min', {'event_category': 'Video','event_label': 'Tempo_05min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_05min);
   }
}
function video_06min(){
   var timePassed = video.currentTime;
   if (timePassed >= 360 && timePassed < 420) {
      fbq('trackCustom', 'Tempo_06min');
      gtag('event', 'Tempo_06min', {'event_category': 'Video','event_label': 'Tempo_06min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_06min);
   }
}
function video_07min(){
   var timePassed = video.currentTime;
   if (timePassed >= 420 && timePassed < 480) {
      fbq('trackCustom', 'Tempo_07min');
      gtag('event', 'Tempo_07min', {'event_category': 'Video','event_label': 'Tempo_07min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_07min);
   }
}
function video_08min(){
   var timePassed = video.currentTime;
   if (timePassed >= 480 && timePassed < 540) {
      fbq('trackCustom', 'Tempo_08min');
      gtag('event', 'Tempo_08min', {'event_category': 'Video','event_label': 'Tempo_08min','value':'Video-01'});
      video.removeEventListener("timeupdate", video_08min);
   }
}
function retencao_Oferta(){
   var tempo = video.currentTime;
   if (tempo >= 425) {
      fbq('trackCustom', 'retencao_Oferta');
      gtag('event', 'retencao_Oferta', {'event_category': 'Video','event_label': 'retencao_Oferta','value':'Video-01'});
      video.removeEventListener("timeupdate", retencao_Oferta);
   }
}
// whatsapp.addEventListener("click", function(){
//    fbq('trackCustom', 'Whatsapp');
//    gtag('event', 'Whatsapp');
// });