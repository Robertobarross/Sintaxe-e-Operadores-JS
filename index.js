function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return "Você deve informar dois números!"; // Retorna mensagem se não for inserido nem um valor
    
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase}${segundaFrase}` // Retornando o resultado
}
// Retornando primeira frase com o resultado
function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2; // Função soma

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10; // Se maior que 10
    const compara20 = soma > 20; // Se maior que 20

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(1, 2));