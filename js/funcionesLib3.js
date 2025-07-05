document.getElementById('claveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const longitud = parseInt(document.getElementById('longitud').value, 10);

    try {
        const clave = generarClaveSegura(longitud);
        document.getElementById('claveGenerada').value = clave;
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('copiadoMsg').style.display = 'none';
        console.log(`Clave generada: ${clave}`);

    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('copiarClave').addEventListener('click', function() {
    const input = document.getElementById('claveGenerada');
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');

    document.getElementById('copiadoMsg').style.display = 'block';
    setTimeout(() => {
        document.getElementById('copiadoMsg').style.display = 'none';
    }, 1500);
});