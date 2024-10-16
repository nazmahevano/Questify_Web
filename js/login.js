$(document).ready(function() {
    // Animasi fade in form saat halaman dimuat
    $('form').css('opacity', 0).animate({opacity: 1, marginTop: '0px'}, 1000);

    // Animasi hover pada tombol login
    $('.btn-primary').hover(
        function() {
            $(this).animate({opacity: 0.8, fontSize: '1.1em'}, 200);
        },
        function() {
            $(this).animate({opacity: 1, fontSize: '1em'}, 200);
        }
    );

    // Background animasi
    $('body').css('background-color', '#f8f9fa').animate({backgroundColor: '#007BFF'}, 2000);
});

function loginSuccess(event) {
    event.preventDefault(); // Mencegah form submit secara otomatis
    
    var username = $('input[type="text"]').val();
    var password = $('input[type="password"]').val();
    
    if (username === "" || password === "") {
        $('form').addClass('shake'); // Tambah kelas shake
        setTimeout(function() {
            $('form').removeClass('shake'); // Hapus kelas shake setelah beberapa waktu
        }, 500);
    } else {
        // Animasi fade out dan slide up sebelum berpindah halaman
        $('form').animate({
            opacity: 0, 
            marginTop: '-100px'
        }, 800, function() {
            alert("Login berhasil! Anda akan diarahkan ke halaman berikutnya.");
            window.location.href = "semuakelas.html"; 
        });
    }
}
