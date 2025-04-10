const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const content = document.getElementById('content');
const body = document.body;
const celebrationMusic = document.getElementById('celebrationMusic');

yesButton.addEventListener('click', function() {
    alert('太好了！我会一辈子好好爱你！');
    startFireworks();
    body.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    content.style.animation = 'blink 1s infinite';
    celebrationMusic.play();
});

noButton.addEventListener('click', function() {
    alert('没关系，我会努力让你更爱我，再给我点时间哦！');
    content.style.animation ='shake 0.5s';
    setTimeout(() => {
        content.style.animation = '';
    }, 500);
});

function startFireworks() {
    const fireworks = document.getElementById('fireworks');
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        fireworks.appendChild(firework);
        setTimeout(() => {
            firework.style.animation = 'explode 1s ease-out';
            setTimeout(() => {
                fireworks.removeChild(firework);
            }, 1000);
        }, i * 200);
    }
}
    