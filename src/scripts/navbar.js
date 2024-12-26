document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.querySelector('.switch input');
    const navbarContent = document.getElementById('nav-bar__list');
    const toggleButton = document.querySelector('.nav-bar__toggle-button');

    function updateNavbarState() {
        const isToggleButtonVisible = window.getComputedStyle(toggleButton).display !== 'none';

        if (isToggleButtonVisible) {
            switchInput.addEventListener('change', handleSwitchChange);
            // Initialize the navbar state based on the switch state
            if (switchInput.checked) {
                navbarContent.style.display = 'block';
                navbarContent.classList.add('show');
            } else {
                navbarContent.style.display = 'none';
            }
        } else {
            switchInput.removeEventListener('change', handleSwitchChange);
            navbarContent.style.display = 'block';
            navbarContent.classList.add('show');
        }
    }

    function handleSwitchChange() {
        const isChecked = switchInput.checked;

        if (isChecked) {
            navbarContent.style.display = 'block';
            setTimeout(() => {
                navbarContent.classList.add('show');
            }, 10); // Small delay to ensure display change is applied
        } else {
            navbarContent.classList.remove('show');
            setTimeout(() => {
                navbarContent.style.display = 'none';
            }, 500); // Match the duration of the CSS transition
        }
    }

    window.addEventListener('resize', updateNavbarState);
    updateNavbarState();
});