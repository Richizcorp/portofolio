document.addEventListener('DOMContentLoaded', () => {
    
    // MENGAMBIL SEMUA KARTU EFOOTBALL
    const cards = document.querySelectorAll('.efootball-card');

    cards.forEach(card => {
        // Abaikan efek jika kartu dalam status terkunci
        if (card.classList.contains('locked')) return;

        // Saat Mouse Bergerak di Atas Kartu
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            
            // Menghitung posisi koordinat kursor relatif terhadap kartu
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            // Menemukan titik tengah kartu
            const midX = cardRect.width / 2;
            const midY = cardRect.height / 2;
            
            // Menghitung derajat kemiringan (maksimal 15 derajat)
            const angleX = -(y - midY) / (midY / 15);
            const angleY = (x - midX) / (midX / 15);
            
            // Terapkan transformasi 3D ke kartu
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03)`;
            card.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 30px rgba(139, 0, 0, 0.25)`;
        });

        // Saat Mouse Keluar dari Kartu (Kembalikan ke posisi semula)
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        });

        // Saat Mouse Masuk (Matikan transisi halus sementara agar responsif mengikuti kursor)
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
});