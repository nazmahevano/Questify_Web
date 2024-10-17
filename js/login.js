$(document).ready(function() {     
    
    // Animasi hover pada tombol login
    $('.btn-primary').hover(
        function() {
            // Ketika kursor diarahkan pada tombol, ubah opacity dan ukuran font
            $(this).animate({opacity: 0.8, fontSize: '1.1em'}, 200);
        },
        function() {
            // Ketika kursor meninggalkan tombol, kembalikan opacity dan ukuran font ke nilai semula
            $(this).animate({opacity: 1, fontSize: '1em'}, 200);
        }
    );
});

function loginSuccess(event) {
    event.preventDefault(); 

    // Mendapatkan nilai input dari kolom username dan password
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();

    // Validasi apakah username atau password kosong
    if (username === "" || password === "") {
        alert("Username dan password harus diisi!"); // Menampilkan pesan peringatan jika ada kolom yang kosong
    } else {
        alert("Login berhasil! Anda akan diarahkan ke halaman berikutnya."); 
        window.location.href = "semuakelas.html"; 
    }
}