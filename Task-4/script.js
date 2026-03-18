document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('color-btn');

    // Array of beautiful colors
    const colors = [
        '#0f172a', '#1e1b4b', '#4a044e', '#3f2c2c', '#064e3b', '#172554', '#4c1d95', '#701a75', '#831843'
    ];

    let colorIndex = 0;

    btn.addEventListener('click', () => {
        // Find next color, avoid the current one
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
});
