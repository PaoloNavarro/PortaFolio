
document.addEventListener('DOMContentLoaded', function () {
const menuOptions = document.querySelectorAll('#menu-options a');

    menuOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const yOffset = -60; // Ajusta este valor según tu diseño
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
});
