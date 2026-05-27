document.addEventListener('DOMContentLoaded', () => {
    
    // --- ANIMASI 3D TILT UNTUK SEMUA KARTU PROYEK ---
    const cards = document.querySelectorAll('.efootball-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            const midX = cardRect.width / 2;
            const midY = cardRect.height / 2;
            
            const angleX = -(y - midY) / (midY / 12);
            const angleY = (x - midX) / (midX / 12);
            
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
            
            // Efek bayangan dinamis sesuai tema kartu
            if(card.id === 'iot-card') {
                card.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 30px rgba(52, 211, 153, 0.15)`;
            } else if(card.id === 'tactics-card') {
                card.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 30px rgba(139, 0, 0, 0.25)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
});