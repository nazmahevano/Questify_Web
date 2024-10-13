document.addEventListener("DOMContentLoaded", function () {
  // Dapatkan semua baris data di dalam tabel
  const rows = document.querySelectorAll("tbody tr");

  // Jumlah item per halaman
  const rowsPerPage = 5;

  // Tentukan berapa banyak halaman yang diperlukan
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  // Akses elemen pagination
  const pagination = document.getElementById("pagination");
  const prevPage = document.getElementById("prev-page");
  const nextPage = document.getElementById("next-page");

  let currentPage = 1;

  // Fungsi untuk menampilkan baris tertentu berdasarkan halaman
  function displayPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    // Sembunyikan semua baris
    rows.forEach((row, index) => {
      if (index >= start && index < end) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });

    // Update tampilan pagination yang aktif
    document.querySelectorAll(".page-item[data-page]").forEach((item) => {
      item.classList.remove("active");
    });
    document
      .querySelector(`.page-item[data-page="${page}"]`)
      .classList.add("active");

    // Aktifkan/nonaktifkan tombol "Sebelumnya" dan "Selanjutnya"
    prevPage.classList.toggle("disabled", page === 1);
    nextPage.classList.toggle("disabled", page === pageCount);
  }

  // Fungsi untuk membuat elemen pagination
  function setupPagination() {
    // Hapus pagination yang ada, kecuali "Sebelumnya" dan "Selanjutnya"
    document.querySelectorAll(".page-item[data-page]").forEach((item) => {
      item.remove();
    });

    for (let i = 1; i <= pageCount; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      li.setAttribute("data-page", i);

      const a = document.createElement("a");
      a.classList.add("page-link");
      a.href = "#";
      a.textContent = i;

      li.appendChild(a);
      nextPage.before(li); 
    }

    // Set listener untuk klik pada pagination
    document.querySelectorAll(".page-item[data-page]").forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute("data-page"));
        currentPage = page;
        displayPage(page);
      });
    });
  }

  // Event listener untuk tombol "Sebelumnya"
  prevPage.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayPage(currentPage);
    }
  });

  // Event listener untuk tombol "Selanjutnya"
  nextPage.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < pageCount) {
      currentPage++;
      displayPage(currentPage);
    }
  });

  // Setup pagination dan tampilkan halaman pertama
  setupPagination();
  displayPage(1);
});
