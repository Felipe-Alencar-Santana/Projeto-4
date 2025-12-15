document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaPergunta);
    }
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaPergunta(elemento) {
    const classe = 'faq__list__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}