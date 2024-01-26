const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopPlaying();
    document.getElementById(sound).play();
  });
  const button = document.getElementById("buttons");
  button.appendChild(btn);
});

const buttons = document.querySelectorAll(".btn");

function stopPlaying() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
