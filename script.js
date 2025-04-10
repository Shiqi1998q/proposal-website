const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const content = document.getElementById('content');
const body = document.body;
const celebrationMusic = document.getElementById('celebrationMusic');

yesButton.addEventListener('click', function() {
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
    closeButton.addEventListener('click', function() {
        customAlert.remove();
    });

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