const parallax = document.getElementById('jumbotron');

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + 'px';
})