// Toggle untuk menampilkan/menyembunyikan paragraf di bawah h2
document
  .getElementById("toggleFeatures")
  .addEventListener("click", function () {
    var content = document.getElementById("content");
    var arrow = document.getElementById("arrow");

    if (content.style.display === "none") {
      content.style.display = "block"; // Menampilkan konten (paragraf)
      arrow.innerHTML = "&#9650;"; // Mengubah panah ke atas
    } else {
      content.style.display = "none"; // Menyembunyikan konten
      arrow.innerHTML = "&#9660;"; // Mengubah panah ke bawah
    }
  });
