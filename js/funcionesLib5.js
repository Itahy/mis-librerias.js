// Función para calcular la tenencia de un auto
// Cuando se envía el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formTenencia').onsubmit = function(e) {
        e.preventDefault(); // Evito que la página se recargue al enviar

        let valor = document.getElementById('valorAuto').value;
        let anio = document.getElementById('anioAuto').value;

        try {
            let total = calcularTenencia(valor, anio); //se manda a llamar a la funcion que hace el calculo del pago de la tenencia
            if (total === null) throw new Error("Revisa los datos"); // Si viene null, se lanza un error           
            document.getElementById('montoTenencia').textContent = total.toFixed(2); // se muestra el resultado en pantalla redondeado a 2 decimales            
            document.getElementById('respuesta').style.display = 'block'; // se hace visible la parte del resultado
            console.log(`Monto de tenencia calculado: ${total.toFixed(2)}`); // Se muestra en consola el resultado

        } catch (err) {
            alert(err.message); // Si hubo un error, se muestra un mensaje
        }
    };
});
