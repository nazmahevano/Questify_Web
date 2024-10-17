$(document).ready(function() {     
    // Animasi hover pada tombol login
    $('.btn-primary').hover(
        function() {
            $(this).animate({opacity: 0.8, fontSize: '1.1em'}, 200);
        },
        function() {
            $(this).animate({opacity: 1, fontSize: '1em'}, 200);
        }
    );
});

function loginSuccess(event) {
    event.preventDefault(); // Mencegah form submit secara otomatis

    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();

    if (username === "" || password === "") {
        alert("Username dan password harus diisi!");
    } else {
        alert("Login berhasil! Anda akan diarahkan ke halaman berikutnya.");
        window.location.href = "semuakelas.html"; 
    }
}
