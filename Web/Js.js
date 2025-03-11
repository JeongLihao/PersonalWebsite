const config = {
    quotes: [
        "「落霞与孤鹜齐飞，秋水共长天一色」",
        "「唯我论能给予我们看待事物的不同视角」",
        "「在这里，我们赞美火锅」",
        "「我思故我在」",
        "「404,朋友」",
        "「我想这里要有一句话，于是有了一句话」"
    ],
    // 新增动态背景配置
    backgrounds: [
        './1.png',
        './2.png',
        './3.png'
    ]
};

// 主题切换
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
    // 设置随机背景图
    const randomBackground = config.backgrounds[Math.floor(Math.random() * config.backgrounds.length)];
    document.body.style.backgroundImage = `url(${randomBackground}?${Date.now()})`;

    // 初始化名言
    const quote = config.quotes[Math.floor(Math.random() * config.quotes.length)];
    document.querySelector('.quote-container').textContent = quote;

    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // 绑定事件
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

    // 监听幕布动画结束事件
    const curtainLeft = document.querySelector('.curtain-left');
    const curtainRight = document.querySelector('.curtain-right');
    const curtain = document.querySelector('.curtain');

    const handleAnimationEnd = () => {
        // 移除幕布元素
        curtain.remove();
        showWelcomeMessage();
    };

    curtainLeft.addEventListener('animationend', handleAnimationEnd);
    curtainRight.addEventListener('animationend', handleAnimationEnd);
});

// 新增窗口重置时刷新背景
window.addEventListener('resize', () => {
    const newBackground = config.backgrounds[Math.floor(Math.random() * config.backgrounds.length)];
    document.body.style.backgroundImage = `url(${newBackground}?${Date.now()})`;
});

// 显示欢迎提示框
function showWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcome-message');
    welcomeMessage.textContent = '欢迎你，朋友';
    document.body.appendChild(welcomeMessage);
}