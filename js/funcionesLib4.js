document.getElementById('predialForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let valor = parseFloat(document.getElementById('valorCatastral').value) || 0;
        let tasa = parseFloat(document.getElementById('tasaPredial').value) || 0;
        let impuesto = valor * (tasa / 100);
        let neto = valor - impuesto;
        document.getElementById('predialCalculado').textContent = impuesto.toFixed(2);
        document.getElementById('netoCalculado').textContent = neto.toFixed(2);
        document.getElementById('resultado').style.display = 'block';

        console.log(`Impuesto predial calculado: ${impuesto.toFixed(2)}, Valor neto: ${neto.toFixed(2)}`);
    });