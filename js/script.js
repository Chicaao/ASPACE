// --- Lógica para o Menu Mobile ---

// 1. Seleciona os elementos do HTML que vamos manipular
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mainNav = document.querySelector('.main-nav');

// 2. Verifica se os elementos existem na página antes de adicionar o evento
if (mobileMenuButton && mainNav) {
    // 3. Adiciona um "ouvinte de evento" de clique ao botão
    mobileMenuButton.addEventListener('click', () => {
        // 4. A cada clique, ele adiciona ou remove a classe 'active' do menu
        mainNav.classList.toggle('active');
    });
}
