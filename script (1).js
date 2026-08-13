// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidade dos Botões de "Curtir"
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.like-count');
            let currentLikes = parseInt(countSpan.textContent);

            if (button.classList.contains('liked')) {
                // Se já curtiu, descurte
                button.classList.remove('liked');
                countSpan.textContent = currentLikes - 1;
            } else {
                // Se não curtiu, adiciona a curtida
                button.classList.add('liked');
                countSpan.textContent = currentLikes + 1;
            }
        });
    });

    // 2. Funcionalidade de Busca em Tempo Real
    const searchInput = document.getElementById('searchInput');
    const posts = document.querySelectorAll('.post');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            posts.forEach(post => {
                const title = post.querySelector('h2').textContent.toLowerCase();
                const description = post.querySelector('p').textContent.toLowerCase();

                // Exibe ou oculta o post de acordo com o termo buscado
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }

});