document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    characters.forEach((char, index) => {
        setTimeout(() => {
            char.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                char.style.transform = 'translateY(0)';
            }, 500);
        }, index * 300);
    });
});
