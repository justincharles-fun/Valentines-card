const card = document.getElementById('card');
const flowerContainer = document.querySelector('.flower-container');
const audio = document.getElementById('romanticMusic'); // Reference the audio element

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    
    // Toggle bloom class to restart animations on each flip to back
    if (card.classList.contains('flipped')) {
        flowerContainer.classList.add('bloom');
        audio.play(); // Play music when flipping to back
    } else {
        flowerContainer.classList.remove('bloom');
        audio.pause(); // Pause music when flipping back to front
        audio.currentTime = 0; // Optional: Reset to start
    }
});
