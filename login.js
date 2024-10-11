function loginSuccess(event) {
    event.preventDefault(); // Mencegah form submit secara otomatis
    alert("Login berhasil! Anda akan diarahkan ke halaman berikutnya.");
    window.location.href = "semuakelas.html";
}
