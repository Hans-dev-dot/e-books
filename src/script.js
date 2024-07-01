document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Tambahkan event listener untuk klik pada tombol hamburger
    hamburgerBtn.addEventListener('click', function() {
        // Toggle class 'transform' pada menu mobile untuk menggeser ke samping
        mobileMenu.classList.toggle('-translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');
    });

    // Tambahkan event listener untuk klik di luar menu mobile
    document.addEventListener('click', function(e) {
        const target = e.target;
        const isClickInsideMenu = mobileMenu.contains(target);
        const isHamburgerBtn = target === hamburgerBtn || hamburgerBtn.contains(target);

        // Tutup menu jika yang diklik bukan bagian dari menu mobile atau hamburger button
        if (!isClickInsideMenu && !isHamburgerBtn) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('-translate-x-full');
        }
    });
});


function downloadPDF(pdfFileName) {
    // Ganti dengan path yang sesuai dengan struktur direktori di server Anda
    let pdfPath = './book/' + pdfFileName;

    fetch(pdfPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('File tidak ditemukan');
            }
            return response.blob();
        })
        .then(blob => {
            // Membuat URL objek dari blob
            let blobUrl = URL.createObjectURL(blob);

            // Membuat elemen <a> untuk memicu unduhan
            let a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = pdfFileName; // Nama file yang akan diunduh
            document.body.appendChild(a);

            // Mengklik elemen <a> untuk memicu unduhan
            a.click();

            // Membersihkan URL objek setelah digunakan
            URL.revokeObjectURL(blobUrl);

            // Hapus elemen <a> setelah selesai
            document.body.removeChild(a);
        })
        .catch(error => console.error('Error downloading PDF:', error));
}



// function redirectToPDF(pdfPath) {
//     // Mengarahkan ke file PDF saat tombol diklik
//     window.location.href = pdfPath;
// }