// Explicación para dummies: Esta función lee los inputs, hace la matemática y actualiza la pantalla.
function calculateMetrics() {
    // 1. Obtener los valores que el usuario escribió en la pantalla (convertidos a números)
    const inflow = parseFloat(document.getElementById('inflow').value) || 0;
    const outflow = parseFloat(document.getElementById('outflow').value) || 0;
    
    const ret1 = parseFloat(document.getElementById('ret1').value) || 0;
    const ret2 = parseFloat(document.getElementById('ret2').value) || 0;
    const nonRet = parseFloat(document.getElementById('nonRet').value) || 0;
    const trust = parseFloat(document.getElementById('trust').value) || 0;
    
    const liabilities = parseFloat(document.getElementById('liabilities').value) || 0;

    // 2. Aplicar las Reglas de Negocio del PRD
    // Regla SACS: Exceso = Ingresos - Gastos
    const excess = inflow - outflow;

    // Regla TCC: Net Worth = Retiro1 + Retiro2 + Cuentas No Retiro + Valor Casa (Trust)
    // NOTA DE INGENIERÍA: Las deudas NO se restan del patrimonio neto según instrucción explícita de Rebecca.
    const netWorth = ret1 + ret2 + nonRet + trust;

    // 3. Pintar los resultados formateados como dinero ($) en la pantalla
    document.getElementById('resExcess').innerText = `$${excess.toLocaleString()}`;
    document.getElementById('resNetWorth').innerHTML = `<strong>$${netWorth.toLocaleString()}</strong>`;
    document.getElementById('resLiabilities').innerText = `$${liabilities.toLocaleString()}`;
}

// Simulación del "Backend" para imprimir el PDF usando la función del navegador
function simulatePDF() {
    // Ejecuta la ventana de impresión nativa del sistema operativo
    window.print();
}

// Explicación para dummies: Esto le dice a la página que ejecute los cálculos apenas se mueva cualquier número
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', calculateMetrics);
});

// Ejecutar una vez al cargar la página para que no empiece en $0
calculateMetrics();