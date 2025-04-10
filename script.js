const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const content = document.getElementById('content');
const body = document.body;
const celebrationMusic = document.getElementById('celebrationMusic');

yesButton.addEventListener('click', function () {
    // 禁用我愿意按钮
    yesButton.disabled = true;
    yesButton.style.opacity = '0.5';
    yesButton.style.backgroundColor = '#00FF00';
    yesButton.style.boxShadow = '0 0 10px #00FF00';

    // 禁用再考虑下按钮
    noButton.disabled = true;
    noButton.style.opacity = '0.5';

    // 创建一个自定义的弹窗元素
    const customAlert = document.createElement('div');
    customAlert.classList.add('custom-alert');
    customAlert.innerHTML = `
        <div class="custom-alert-content">
            <span class="custom-alert-text">在这如梦如幻的时刻，你宛如夜空中最璀璨的星辰，点亮了我整个宇宙。你点头答应的瞬间，时间仿佛静止，我的心也随之沉醉。从现在起，我愿化作你最温暖的港湾，为你遮风挡雨；我愿成为你最坚实的依靠，陪你走过每一个春夏秋冬。在未来无数的日子里，我会用无尽的爱与温柔，为你书写属于我们的浪漫篇章，让幸福永远围绕在你身旁。</span>
            <button class="custom-alert-close">好呀</button>
        </div>
    `;
    document.body.appendChild(customAlert);

    // 为关闭按钮添加点击事件
    const closeButton = customAlert.querySelector('.custom-alert-close');
    closeButton.addEventListener('click', function () {
        customAlert.remove();
    });

    startFireworks();
    body.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    content.style.animation = 'blink 1s infinite';
    celebrationMusic.play();
});

noButton.addEventListener('click', function () {
    alert('没关系，我会努力让你更爱我，再给我点时间哦！');
    content.style.animation ='shake 0.5s';
    setTimeout(() => {
        content.style.animation = '';
    }, 500);
});

function startFireworks() {
    const fireworks = document.getElementById('fireworks');
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const firework = createFirework();
            fireworks.appendChild(firework);
            explodeFirework(firework);
        }, i * 200);
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33E3', '#33FFF6'];
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    return firework;
}

function explodeFirework(firework) {
    const particles = 20;
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        particle.style.left = '0';
        particle.style.top = '0';
        const angle = (i / particles) * 360;
        const distance = Math.random() * 50 + 20;
        const x = Math.cos(angle * (Math.PI / 180)) * distance;
        const y = Math.sin(angle * (Math.PI / 180)) * distance;
        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.backgroundColor = firework.style.backgroundColor;
        firework.appendChild(particle);
        setTimeout(() => {
            particle.style.opacity = '0';
            setTimeout(() => {
                particle.remove();
            }, 500);
        }, 100);
    }
    setTimeout(() => {
        firework.remove();
    }, 600);
}

document.head.insertAdjacentHTML('beforeend', `
    <style>
      .firework-particle {
            position: absolute;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
    </style>
`);    