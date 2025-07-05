
document.getElementById('ivaForm').onsubmit = function(e) {
            e.preventDefault();

            let precio = parseFloat(document.getElementById('precio').value);
            let iva = parseFloat(document.getElementById('iva').value);

            try {
                let resultado = calcularIVA(precio, iva);

                document.getElementById('ivaCalculado').textContent = resultado.ivaCalculado.toFixed(2);
                document.getElementById('totalCalculado').textContent = resultado.totalConIVA.toFixed(2);
                document.getElementById('resultado').style.display = 'block';
                console.log(`IVA calculado: ${resultado.ivaCalculado}, Total con IVA: ${resultado.totalConIVA}`);

            } catch (error) {
                alert(error.message);
            }
        };
