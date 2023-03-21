const btnConverter = document.getElementById('btnConverter')

btnConverter.addEventListener('click', () => {
    let inQuilo = document.getElementById('inQuilo');
    let inGrama = document.getElementById('inGrama');
    let outValor = document.getElementById('outValor');

    let grama = inGrama.value;
    let quilo = inQuilo.value;
    let result = (grama * quilo)/1000

    outValor.textContent = `Valor a pagar R$ ${result.toFixed(2)}`
})