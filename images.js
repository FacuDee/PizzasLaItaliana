const image = document.getElementById('myImage');

image.addEventListener('click', function() {
  if (image.requestFullscreen) {
    image.requestFullscreen();
  } else if (image.mozRequestFullScreen) { // Firefox
    image.mozRequestFullScreen();
  } else if (image.webkitRequestFullscreen) { // Chrome, Safari y Opera
    image.webkitRequestFullscreen();
  } else if (image.msRequestFullscreen) { // IE/Edge
    image.msRequestFullscreen();
  }
});
