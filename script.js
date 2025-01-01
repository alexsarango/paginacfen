// Lógica para el hover sobre los cuadros de "Más información"
document.querySelectorAll('.more-info').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = "#0056b3";
    });

    item.addEventListener('mouseout', () => {
        item.style.color = "#007bff";
    });
});