window.onload = (() => {
    (() => {
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
    })();

    (() => {
        const btnSaibaMaisSiteSmec = document.querySelector('#saiba-mais-site-smec');

        btnSaibaMaisSiteSmec.addEventListener('click', () => {
            const caminhoSiteSmec = fetch('projetos/site-smec/site-smec.html');
            caminhoSiteSmec.then(r => r.text()).then(body => {
                const tela = document.querySelector('main');
                tela.innerHTML = body;
            })
            const removerInformacoes = document.querySelector('.informacoes');
            removerInformacoes.remove();
        })
    })();
})