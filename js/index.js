$(document).ready(function () {
  
  $('#toggleFeatures').click(function () {
    var content = $('#content'); // Paragraf di bawah h2
    var arrow = $('#arrow'); // Panah di samping h2

    if (content.is(':hidden')) {
      content.slideDown(); // Tampilkan paragraf dengan animasi
      arrow.html('&#9650;'); // Ganti panah ke atas
    } else {
      content.slideUp(); // Sembunyikan paragraf dengan animasi
      arrow.html('&#9660;'); // Ganti panah ke bawah
    }
  });
});
