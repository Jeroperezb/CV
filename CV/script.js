
document.addEventListener('click', (event) => {
    const mensaje = '¡Gracias por ver mi CV!';

    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = 'mensaje';

    mensajeDiv.style.position = 'absolute';
    mensajeDiv.style.top = `${event.clientY}px`;
    mensajeDiv.style.left = `${event.clientX}px`;

    document.body.appendChild(mensajeDiv);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 1000); 
});

