document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    // Função para mostrar um slide específico
    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        currentPage = index;
        updatePageIndicator();
    }

    // Função para atualizar a barra de indicação de página
    function updatePageIndicator() {
        pages.forEach((page, idx) => {
            if (idx === currentPage) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    // Event listener para as setas do teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp' && currentPage > 0) {
            showSlide(currentPage - 1);
        } else if (event.key === 'ArrowDown' && currentPage < slides.length - 1) {
            showSlide(currentPage + 1);
        } else if (event.key === 'l') {
            window.location.href = 'load.html';
        }
    });

    // Event listener para cliques nas páginas indicadoras
    pages.forEach((page, idx) => {
        page.addEventListener('click', function() {
            showSlide(idx);
        });
    });

    // Mostrar o primeiro slide ao carregar a página
    showSlide(0);
});
