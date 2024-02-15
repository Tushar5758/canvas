document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('carCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = 'darkslategray';
    ctx.fillRect(100, 150, 400, 100);
    ctx.fillRect(150, 100, 300, 50);

    ctx.fillStyle = 'lightgray';
    ctx.fillRect(160, 110, 80, 40);
    ctx.fillRect(310, 110, 80, 40);

    ctx.fillStyle = '#303030';
    ctx.beginPath();
    ctx.arc(200, 250, 40, 0, Math.PI * 2, true);
    ctx.arc(400, 250, 40, 0, Math.PI * 2, true);
    ctx.fill();
});
