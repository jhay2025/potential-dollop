const audioFileInput = document.getElementById('audioFile');
const audioPlayer = document.getElementById('audioPlayer');

audioFileInput.addEventListener('change', () => {
  const file = audioFileInput.files[0];
  if (file) {
    const audioURL = URL.createObjectURL(file);
    audioPlayer.src = audioURL;
    audioPlayer.play();
  }
});
