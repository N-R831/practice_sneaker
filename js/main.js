'use strict';

{
    // ハンバーガーメニューの処理
    const hamburger = document.getElementById('hamburger');
    const mask = document.getElementById('mask');
    const navi = document.getElementById('navi');

    hamburger.addEventListener('click', e => {
        hamburger.classList.toggle('open')
        mask.classList.toggle('open')
        navi.classList.toggle('open')

    })

    mask.addEventListener('click', e => {
        hamburger.classList.remove('open')
        mask.classList.remove('open')
        navi.classList.remove('open')
    })

    navi.addEventListener('click', e => {
        hamburger.classList.remove('open')
        mask.classList.remove('open')
        navi.classList.remove('open')
    })

    // 画面上にスライドしたらポップアップする処理
    const targets = document.querySelectorAll('img');

    function callback(entries, obs) {
        console.log(entries);

        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return
            }
    
            entry.target.classList.add('fadeIn');
            obs.unobserve(entry.target);
        })
    }

    const options = {
        // 200px画面を通過したら出現させる
        threshold: 1,
        rootMargin: '0px 0px 200px',
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach(target => {
        observer.observe(target);
    })


    // スムーススクロール
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < smoothScrollTrigger.length; i++){
        smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 0;
        const target = rect + offset - gap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
        });
    }
};

// PICK UP スライダー
$(function() {
    $('.slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
      });
});