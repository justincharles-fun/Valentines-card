const card = document.getElementById('card');
const flowerContainer = document.querySelector('.flower-container');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    
    // Toggle bloom class to restart animations on each flip to back
    if (card.classList.contains('flipped')) {
        flowerContainer.classList.add('bloom');
    } else {
        flowerContainer.classList.remove('bloom');
    }
});

// Optional: Play a soft romantic sound on flip (uncomment and add audio file)
// const audio = new Audio('path/to/romantic-music.mp3');
// card.addEventListener('click', () => {
//     if (card.classList.contains('flipped')) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// });