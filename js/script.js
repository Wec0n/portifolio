window.onload = (() => {
    const btn = document.querySelector('.menu-icon');
    const menu = document.querySelector('header nav');
    btn.addEventListener('click', () => {
        if (menu.style.left != '0%') {
            menu.style.left = '0%';
            btn.querySelector('img').src = 'img/close.svg';
        } else {
            menu.style.left = '-100%';
            btn.querySelector('img').src = 'img/menu.svg';
        }
    })
})