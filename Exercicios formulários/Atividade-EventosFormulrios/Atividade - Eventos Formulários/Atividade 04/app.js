const btnConverter = document.getElementById('btnConverter')

btnConverter.addEventListener('click', () => {
    let inName = document.getElementById('inName');
    let inPreco = document.getElementById('inPreco');
    let outName = document.getElementById('outName');
    let outPreco = document.getElementById('outPreco');

    let name = inName.value;
    let preco = inPreco.value;

    outName.textContent = `Promoção de ${name}`;
    outPreco.textContent = `Leve 2 por R$ ${Math.floor(preco*2)}`
})