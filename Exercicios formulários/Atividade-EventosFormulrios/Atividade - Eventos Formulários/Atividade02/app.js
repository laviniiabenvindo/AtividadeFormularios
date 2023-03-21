const btnConverter = document.getElementById('btnConverter');

btnConverter.addEventListener('click', () => {
    let inName = document.getElementById('inName');
    let inValor = document.getElementById('inValor');
    let outName = document.getElementById('outName');
    let outValor = document.getElementById('outValor');
    let outDiv = document.getElementById('outDiv');

    let  name = inName.value;
    let valor = inValor.value;

    outName.textContent = name;
    outValor.textContent = `Entrada de ${Math.floor(valor/2)}`
    outDiv.textContent = `12x de ${Math.floor(valor/12)}`
})