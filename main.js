document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("play-btn");
  const music = document.getElementById("bg-music");

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "⏸️ Pausar";
    } else {
      music.pause();
      btn.textContent = "🎶 Escuchar";
    }
  });
});
