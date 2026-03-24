// オープニングアニメーションの制御
window.addEventListener('load', () => {
    const openingScreen = document.getElementById('opening-screen');
    if (openingScreen) {
        // スクロールを一時的に無効化
        document.body.style.overflow = 'hidden';
        
        // 2.5秒後にフェードアウト開始
        setTimeout(() => {
            openingScreen.classList.add('fade-out');
            // スクロールを再度有効化
            document.body.style.overflow = '';
            
            // 完全に非表示にする
            setTimeout(() => {
                openingScreen.style.display = 'none';
            }, 1000);
        }, 2500);
    }
});

// Lucideアイコンの初期化
lucide.createIcons();

// 1. スクロール検知によるナビゲーションバーの背景変更
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'py-4');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// 2. モバイルメニューの開閉
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // 少し遅れてopacityを変えることでフェードインさせる
        setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
    } else {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    }
}

menuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// 3. スクロールアニメーション (RevealOnScroll)
const revealElements = document.querySelectorAll('.reveal-on-scroll');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// 4. マーキーの複製 (DOMを埋めるため)
const marqueeContainer = document.querySelector('.animate-marquee');
const marqueeContent = document.querySelector('.marquee-content');
for(let i=0; i<10; i++) {
    marqueeContainer.appendChild(marqueeContent.cloneNode(true));
}

const marqueeContainer2 = document.querySelector('.animate-marquee-reverse');
const marqueeContent2 = document.querySelector('.marquee-content-2');
for(let i=0; i<10; i++) {
    marqueeContainer2.appendChild(marqueeContent2.cloneNode(true));
}
