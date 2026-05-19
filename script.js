function calculateMetrics() {

    const inflow = parseFloat(document.getElementById('inflow').value) || 0;
    const outflow = parseFloat(document.getElementById('outflow').value) || 0;
    
    const ret1 = parseFloat(document.getElementById('ret1').value) || 0;
    const ret2 = parseFloat(document.getElementById('ret2').value) || 0;
    const nonRet = parseFloat(document.getElementById('nonRet').value) || 0;
    const trust = parseFloat(document.getElementById('trust').value) || 0;
    
    const liabilities = parseFloat(document.getElementById('liabilities').value) || 0;

    const excess = inflow - outflow;

    const netWorth = ret1 + ret2 + nonRet + trust;

    document.getElementById('resExcess').innerText = `$${excess.toLocaleString()}`;
    document.getElementById('resNetWorth').innerHTML = `<strong>$${netWorth.toLocaleString()}</strong>`;
    document.getElementById('resLiabilities').innerText = `$${liabilities.toLocaleString()}`;
}

function simulatePDF() {
    window.print();
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', calculateMetrics);
});

calculateMetrics();