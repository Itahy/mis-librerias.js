/**
 * Calcula el IVA a partir de un precio base y una tasa de IVA.
 * Calcula el ISR a partir de un ingreso gravable y una tasa de ISR.
 * Genera una clave segura aleatoria con letras, números y símbolos.
 * Calcula el impuesto predial basado en el valor catastral y la tasa aplicable. 
 * Calcular tenencia según el valor y año del auto.
*/

/**
 * Calcula el IVA y el total con IVA incluido.
 * @param {number} precio - Precio sin IVA.
 * @param {number} porcentajeIVA - Tasa de IVA en porcentaje (ej. 21).
 * @returns {Object|null} - Contiene el ivaCalculado y el totalConIVA, o null si parámetros inválidos.
 */
function calcularIVA(precio, porcentajeIVA) {
    precio = parseFloat(precio);
    porcentajeIVA = parseFloat(porcentajeIVA);
    if (isNaN(precio) || isNaN(porcentajeIVA)) {
        return null;
    }
    const iva = precio * (porcentajeIVA / 100);
    const total = precio + iva;
    return {
        ivaCalculado: iva,
        totalConIVA: total
    };
}

/**
 * Calcula el ISR y el ingreso neto.
 * @param {number} ingreso - Monto del ingreso gravable.
 * @param {number} tasaISR - Porcentaje de ISR (ej. 30).
 * @returns {Object} - Contiene el isrCalculado y el ingresoNeto.
 * @throws {Error} - Si los parámetros no son válidos.
 */
function calcularISR(ingreso, tasaISR) {
    ingreso = parseFloat(ingreso);
    tasaISR = parseFloat(tasaISR);
    if (isNaN(ingreso) || isNaN(tasaISR)) {
        throw new Error("Entradas inválidas. Ambos valores deben ser numéricos.");
    }
    const isr = ingreso * (tasaISR / 100);
    const ingresoNeto = ingreso - isr;
    return {
        isrCalculado: isr,
        ingresoNeto: ingresoNeto
    };
}

/**
 * Genera una clave segura aleatoria con letras, números y símbolos.
 * @param {number} longitud - Longitud deseada para la clave.
 * @returns {string} - Clave generada aleatoriamente.
 * @throws {Error} - Si la longitud es menor a 8.
 */
function generarClaveSegura(longitud) {
    longitud = parseInt(longitud);
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+[]{};:,.<>?';
    const todos = letras + numeros + simbolos;
    if (isNaN(longitud) || longitud < 8) {
        throw new Error("La longitud mínima debe ser de al menos 8 caracteres.");
    }
    let clave = '';
    clave += letras[Math.floor(Math.random() * letras.length)];
    clave += numeros[Math.floor(Math.random() * numeros.length)];
    clave += simbolos[Math.floor(Math.random() * simbolos.length)];
    for (let i = 3; i < longitud; i++) {
        clave += todos[Math.floor(Math.random() * todos.length)];
    }
    clave = clave.split('').sort(() => 0.5 - Math.random()).join('');
    return clave;
}

/**
 * Calcula el impuesto predial basado en el valor catastral y la tasa aplicable.
 * @param {number} valorCatastral - Valor catastral del inmueble.
 * @param {number} tasaPredial - Tasa de impuesto predial en porcentaje (ej. 0.5).
 * @returns {number} - Importe del impuesto predial.
 * @throws {Error} - Si los parámetros no son válidos.
 */
function calcularImpuestoPredial() {
    let valorCatastral = parseFloat(valorCatastral);
    let tasaPredial = parseFloat(tasaPredial);
    valorCatastral = parseFloat(valorCatastral);
    tasaPredial = parseFloat(tasaPredial);
    if (isNaN(valorCatastral) || isNaN(tasaPredial)) {
        throw new Error("Entradas inválidas. Ambos valores deben ser numéricos.");
    }
    return valorCatastral * (tasaPredial / 100);
}

/**
 * Calcula la tenencia según el valor y año del auto.
 * @param {number} valor - Valor del auto.
 * @param {number} anio - Año del auto.
 * @returns {number|null} - Importe de la tenencia o null si parámetros inválidos.
 */
function calcularTenencia(valor, anio) {
    valor = parseFloat(valor);
    anio = parseInt(anio);
    const hoy = new Date().getFullYear();
    if (isNaN(valor) || isNaN(anio) || anio > hoy || valor <= 0) {
        return null;
    }
    const edad = hoy - anio;
    let porcentaje = 0.03;
    if (edad <= 1) porcentaje = 0.05;
    return valor * porcentaje;
}

// Exportar funciones para uso en el navegador
if (typeof window !== 'undefined') {
    window.calcularIVA = calcularIVA;
    window.calcularISR = calcularISR;
    window.generarClaveSegura = generarClaveSegura;
    window.calcularImpuestoPredial = calcularImpuestoPredial;
    window.calcularTenencia = calcularTenencia;
}
// Exportar funciones si se usa en Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calcularIVA, calcularISR, generarClaveSegura, calcularTenencia };
}