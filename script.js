document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Mencegah halaman dimuat ulang (refresh) saat formulir dikirim
    event.preventDefault();

    // Mengambil nilai dari kolom input
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Kredensial simulasi untuk purwarupa (Bisa Anda sesuaikan)
    const validUsername = "admin";
    const validPassword = "sigap";

    // Logika verifikasi
    if (usernameInput === validUsername && passwordInput === validPassword) {
        // Jika benar, arahkan ke halaman dashboard
        // Pastikan Anda sudah membuat berkas dashboard.html
        window.location.href = "dashboard.html"; 
    } else {
        // Jika salah, tampilkan pesan galat
        errorMessage.textContent = "Nama pengguna atau kata sandi tidak valid.";
    }
});
