// Obtém as referências para a lâmpada e o botão
const lamp1 = document.getElementById('lamp1');
const btnChange = document.getElementById('btnChange');

// Adiciona um ouvinte de evento ao botão
btnChange.addEventListener('click', () => {
    // Verifica se a lâmpada está atualmente clara
    const isLamp1Bright = lamp1.src.includes('bulb-on');

    // Muda entre as imagens clara e escura
    if (isLamp1Bright) {
        // Se estiver clara vai mudar para a imagem escura
        lamp1.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
        lamp1.alt = 'Lâmpada Escura';
    } else {
        // Se estiver escura vai mudar para a imagem clara
        lamp1.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
        lamp1.alt = 'Lâmpada Clara';
    }
});
