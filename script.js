function showQuestion(questionDivId) {

    const questionDiv = document.getElementById(questionDivId);
    if (questionDiv.style.display === 'none' || questionDiv.style.display === '') {
        questionDiv.style.display = 'block';
    } else {
        questionDiv.style.display = 'none';
    }
}

function q1() {

    // Obter os dados inseridos pelo usuário
    let numeroInteiro = document.getElementById('numeroInteiro1').value;
    let numeroDecimal = document.getElementById('numeroDecimal1').value;

    // Converter os dados
    numeroInteiro = parseInt(numeroInteiro);
    numeroDecimal = parseFloat(numeroDecimal);

    // Obter os tipos de dados
    let tipoInt = typeof numeroInteiro;
    let tipoDec = typeof numeroDecimal;

    // Criar a mensagem de saída
    let output = 'O tipo de ' + numeroInteiro + ' é ' + tipoInt + ' e o tipo de ' + numeroDecimal + ' é ' + tipoDec;

    // Mostrar os resultados
    document.getElementById('output1').innerHTML = output;
}

function q2() {
    // Obter os dados inseridos pelo usuário
    let nome = document.getElementById('nome2').value;
    let idade = parseInt(document.getElementById('idade2').value);

    //Criar a mensagem de saída
    let output = 'Olá, ' + nome + '! Você tem ' + idade + ' anos.';

    // Mostrar os resultados
    document.getElementById('output2').innerHTML = output;
}

function q3() {

    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero3').value;
    numero = parseInt(numero);
    console.log(`Número convertido: ${numero}`);

    // Mostrar os resultados
    document.getElementById('output3').innerHTML = `Número convertido: ${numero}`;
}

function q4() {

    // Obter os dados inseridos pelo usuário
    let alturaStr = document.getElementById('altura4').value;

    // Converter a altura para ponto flutuante usando parseFloat()

    let altura = parseFloat(alturaStr);

    // Mostrar os resultados
    document.getElementById('output4').innerHTML = `Altura convertida: ${altura}`;
}

function q5() {

    // Obter os dados inseridos pelo usuário
    let idadeStr = document.getElementById('idade5').value;

    // Converter a idade para inteiro usando parseInt()
    let idade = NaNumber(idadeStr);

    // Mostrar os resultados
    document.getElementById('output5').innerHTML = `Idade convertida: ${idade}`;
}

function q6() {

    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero6').value;

    // Converter o número para inteiro usando parseInt()
    numero = parseInt(numero);

    // Verificar se o número é par ou ímpar
    let parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';

    // Mostrar os resultados
    document.getElementById('output6').innerHTML = `O número ${numero} é ${parOuImpar}`;
}

function q7() {

    // Obter os dados inseridos pelo usuário
    let num1 = document.getElementById('numeroQ7-1').value;
    let num2 = document.getElementById('numeroQ7-2').value;
    let num3 = document.getElementById('numeroQ7-3').value;

    // Converter os números para inteiros
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    // Encontrar o maior número usando Math.max()
    let maiorNum = Math.max(num1, num2, num3);

    // Mostrar os resultados
    document.getElementById('output7').innerHTML = `O maior número é ${maiorNum}`;

}

function q8() {

    // Obter os dados inseridos pelo usuário
    let nota1 = document.getElementById('notaQ8-1').value;
    let nota2 = document.getElementById('notaQ8-2').value;
    let nota3 = document.getElementById('notaQ8-3').value;

    // Converter as notas para floats
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    // Calcular a média das notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Verificar se o aluno foi aprovado ou reprovado
    let output = document.getElementById('output8');
    if(media >= 7) {
        output.innerHTML = `Parabéns! Sua média é ${media.toFixed(2)}. Você foi Aprovado.`;
    } else {    
        output.innerHTML = `Sua média é ${media.toFixed(2)}. Você foi Reprovado.`;
    }
}

function q9() {

    // Obter os dados inseridos pelo usuário
    let anoNascimento = document.getElementById('anoNascimento9').value;

    // Obter o ano atual
    let anoAtual = new Date().getFullYear();

    // Validar se o ano de nascimento é negativo ou maior que o ano atual
    if(anoNascimento < 0 || anoNascimento > anoAtual) {
        document.getElementById('output9').innerHTML = 'Ano de nascimento inválido.';
        return;
    }

    // Calcular a idade
    let idade = anoAtual - anoNascimento;

    // Verificar se é maior de idade
    let output = document.getElementById('output9');
    if(idade >= 18) {
        output.innerHTML = `Você tem ${idade} anos. Você é maior de idade.`;
    } else {
        output.innerHTML = `Você tem ${idade} anos. Você é menor de idade.`;
    }
}

function q10() {

    // Obter os dados inseridos pelo usuário
    let temperatura = document.getElementById('temperatura10').value;

    // Obter a escala de temperatura
    let escala = document.getElementById('escala10').value;

    // Converter a temperatura conforme a escala selecionada
    let output = document.getElementById('output10');
    if (escala === 'celsius') {
        // Converter para Fahrenheit
        let fahrenheit = (temperatura * 9/5) + 32;
        output.innerHTML = `${temperatura}°C é igual a ${fahrenheit.toFixed(2)}°F`;
    } else if (escala === 'fahrenheit') {
        // Converter para Celsius
        let celsius = (temperatura - 32) * 5/9;
        output.innerHTML = `${temperatura}°F é igual a ${celsius.toFixed(2)}°C`;
    }
}

function q11() {

    // Obter os dados inseridos pelo usuário
    let numero1 = document.getElementById('numeroQ11-1').value;
    let numero2 = document.getElementById('numeroQ11-2').value;

    // Converter os números para inteiros
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    // Verificar se pelo menos um dos números é multiplo do outro
    let output = document.getElementById('output11');
    if (numero1 !== 0 && numero2 !== 0 && (numero1 % numero2 === 0 || numero2 % numero1 === 0)) {
        output.innerHTML = 'Um número é múltiplo do outro.';
    } else {
        output.innerHTML = 'Os números não são múltiplos um do outro.';
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.question').forEach((element) => {
        element.style.display = 'none';
    });
});