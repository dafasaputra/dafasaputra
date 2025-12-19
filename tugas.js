document.addEventListener('DOMContentLoaded', () => {
    const planetCards = document.querySelectorAll('.card');
    const detailFrame = document.getElementById('planet-detail-frame');
    const detailImg = document.getElementById('detail-img');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');

    const updateDetailFrame = (imageSrc, title, description) => {
        detailImg.src = imageSrc;
        detailImg.alt = `Gambar Planet ${title}`;
        detailTitle.textContent = title;
        detailDescription.textContent = description;
        detailImg.style.display = 'block';

        detailFrame.classList.remove('hidden');
        detailFrame.style.opacity = '0';
        setTimeout(() => {
            detailFrame.style.opacity = '1';
        }, 50);
    };

    planetCards.forEach(card => {
        card.addEventListener('click', () => {
            const planetTitle = card.getAttribute('data-title');
            const planetDesc = card.getAttribute('data-desc'); 
            const planetImage = card.querySelector('img').src; 

            updateDetailFrame(planetImage, planetTitle, planetDesc);
        });
    });
});
