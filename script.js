function showQuestion(questionDivId) {

    const questionDiv = document.getElementById(questionDivId);
    if (questionDiv.style.display === 'none' || questionDiv.style.display === '') {
        questionDiv.style.display = 'block';
    } else {
        questionDiv.style.display = 'none';
    }
}
function showCode(codigoId, loadFunction) {
    const codigoElement = document.getElementById(codigoId);
    if (codigoElement.style.display === 'none' || codigoElement.style.display === '') {
        loadFunction();
        codigoElement.style.display = 'block';
    } else {
        codigoElement.style.display = 'none';
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

function q1Codigo() {

    let codigo = `
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
}`;

    let codigoElement = document.getElementById('codigo1');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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


function q2Codigo() {

    let codigo = `
    function q2() {
    // Obter os dados inseridos pelo usuário
    let nome = document.getElementById('nome2').value;
    let idade = parseInt(document.getElementById('idade2').value);

    //Criar a mensagem de saída
    let output = 'Olá, ' + nome + '! Você tem ' + idade + ' anos.';

    // Mostrar os resultados
    document.getElementById('output2').innerHTML = output;
}`;

    let codigoElement = document.getElementById('codigo2');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
}

function q3() {

    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero3').value;
    numero = parseInt(numero);
    console.log(`Número convertido: ${numero}`);

    // Mostrar os resultados
    document.getElementById('output3').innerHTML = `Número convertido: ${numero}`;
}

function q3Codigo() {
    
    

    let codigo = `
    function q3() {
    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero3').value;
    numero = parseInt(numero);
    console.log('Número convertido: ' + numero);

    // Mostrar os resultados
    document.getElementById('output3').innerHTML = 'Número convertido: ' + numero;
}`;

    let codigoElement = document.getElementById('codigo3');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
}

function q4() {

    // Obter os dados inseridos pelo usuário
    let alturaStr = document.getElementById('altura4').value;

    // Converter a altura para ponto flutuante usando parseFloat()

    let altura = parseFloat(alturaStr);

    // Mostrar os resultados
    document.getElementById('output4').innerHTML = `Altura convertida: ${altura}`;

}

function q4Codigo() {
    

    let codigo = `
    function q4() {
    // Obter os dados inseridos pelo usuário
    let alturaStr = document.getElementById('altura4').value;

    // Converter a altura para ponto flutuante usando parseFloat()
    let altura = parseFloat(alturaStr);

    // Mostrar os resultados
    document.getElementById('output4').innerHTML = 'Altura convertida: ' + altura;
}`;

    let codigoElement = document.getElementById('codigo4');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
}


function q5() {

    // Obter os dados inseridos pelo usuário
    let idade = document.getElementById('idade5').value;

    // Converter a idade para inteiro usando parseInt()
    idade = Number(idade);

    // Mostrar os resultados
    if (isNaN(idade) || idade <= 0) {
        document.getElementById('output5').innerHTML = 'Por favor, insira uma idade válida.';
    } else {
        document.getElementById('output5').innerHTML = `Idade convertida: ${idade}`;
    }
}

function q5Codigo() {
    

    let codigo = `
    function q5() {
    // Obter os dados inseridos pelo usuário
    let idade = document.getElementById('idade5').value;

    // Converter a idade para inteiro usando parseInt()
    idade = Number(idade);

    // Mostrar os resultados
    if (isNaN(idade) || idade <= 0) {
        document.getElementById('output5').innerHTML = 'Por favor, insira uma idade válida.';
    } else {
        document.getElementById('output5').innerHTML = 'Idade convertida: ' + idade;
    }
}`;

    let codigoElement = document.getElementById('codigo5');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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

function q6Codigo() {
    

    let codigo = `
    function q6() {
    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero6').value;

    // Converter o número para inteiro usando parseInt()
    numero = parseInt(numero);

    // Verificar se o número é par ou ímpar
    let parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';

    // Mostrar os resultados
    document.getElementById('output6').innerHTML = 'O número ' + numero + ' é ' + parOuImpar;
}`;

    let codigoElement = document.getElementById('codigo6');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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

function q7Codigo() {
    

    let codigo = `
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
    document.getElementById('output7').innerHTML = 'O maior número é ' + maiorNum;
}`;

    let codigoElement = document.getElementById('codigo7');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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

function q8Codigo() {
    

    let codigo = `
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
        output.innerHTML = 'Parabéns! Sua média é ' + media.toFixed(2) + '. Você foi Aprovado.';
    } else {    
        output.innerHTML = 'Sua média é ' + media.toFixed(2) + '. Você foi Reprovado.';
    }
}`;

    let codigoElement = document.getElementById('codigo8');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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

function q9Codigo() {
    

    let codigo = `
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
        output.innerHTML = 'Você tem ' + idade + ' anos. Você é maior de idade.';
    } else {
        output.innerHTML = 'Você tem ' + idade + ' anos. Você é menor de idade.';
    }
}`;

    let codigoElement = document.getElementById('codigo9');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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

function q10Codigo() {
    

    let codigo = `
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
        output.innerHTML = temperatura + '°C é igual a ' + fahrenheit.toFixed(2) + '°F';
    } else if (escala === 'fahrenheit') {
        // Converter para Celsius
        let celsius = (temperatura - 32) * 5/9;
        output.innerHTML = temperatura + '°F é igual a ' + celsius.toFixed(2) + '°C';
    }
}`;

    let codigoElement = document.getElementById('codigo10');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
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

function q11Codigo() {
    

    let codigo = `
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
}`;

    let codigoElement = document.getElementById('codigo11');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
}


function q12() {

    // Obter os dados inseridos pelo usuário
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let lado3 = document.getElementById('lado3').value;


    // 
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        document.getElementById('output12').innerHTML = 'Por favor, insira valores positivos.';
        return;
    }

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            document.getElementById('output12').innerHTML = 'Triângulo Equilátero';
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            document.getElementById('output12').innerHTML = 'Triângulo Isósceles';
        } else {
            document.getElementById('output12').innerHTML = 'Triângulo Escaleno';
        }
    } else {    
        document.getElementById('output12').innerHTML = 'Não é um triângulo válido.';
    }
}

function q12Codigo() {
    

    let codigo = `
    function q12() {

    // Obter os dados inseridos pelo usuário
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let lado3 = document.getElementById('lado3').value;


    // 
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        document.getElementById('output12').innerHTML = 'Por favor, insira valores positivos.';
        return;
    }

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            document.getElementById('output12').innerHTML = 'Triângulo Equilátero';
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            document.getElementById('output12').innerHTML = 'Triângulo Isósceles';
        } else {
            document.getElementById('output12').innerHTML = 'Triângulo Escaleno';
        }
    } else {    
        document.getElementById('output12').innerHTML = 'Não é um triângulo válido.';
    }
}`;

    let codigoElement = document.getElementById('codigo12');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;
    Prism.highlightElement(codigoElement);
}


function q13() {

    let prato = document.getElementById('prato13').value;
    let descricao = '';
    let preco = '';

    let resultado = document.getElementById('output13');

    switch(prato) {
        
        case 'pizza':
            descricao = 'Pizza: Uma deliciosa pizza com molho de tomate, queijo';
            preco = 'R$ 30.00';
            break;

        case 'hamburguer':
            descricao = 'Hamburguer: Um delicioso hamburguer com carne, alface, tomate';
            preco = 'R$ 25.00';
            break;

        case 'salada':
            descricao = 'Salada: Uma salada fresca com alface, tomate, cenoura';
            preco = 'R$ 10.00';
            break;

        case 'macarrao':
            descricao = 'Macarrão: Um prato de macarrão com molho de tomate e queijo';
            preco = 'R$ 20.00';
            break;

        default:
            descricao = 'Prato não encontrado';
            preco = '';
    }

    resultado.innerHTML = descricao + '<br>' + 'Preço: ' + preco;

}

function q13Codigo() {
        
    
        let codigo = `
        function q13() {
    
        let prato = document.getElementById('prato13').value;
        let descricao = '';
        let preco = '';
    
        let resultado = document.getElementById('output13');
    
        switch(prato) {
            
            case 'pizza':
                descricao = 'Pizza: Uma deliciosa pizza com molho de tomate, queijo';
                preco = 'R$ 30.00';
                break;
    
            case 'hamburguer':
                descricao = 'Hamburguer: Um delicioso hamburguer com carne, alface, tomate';
                preco = 'R$ 25.00';
                break;
    
            case 'salada':
                descricao = 'Salada: Uma salada fresca com alface, tomate, cenoura';
                preco = 'R$ 10.00';
                break;
    
            case 'macarrao':
                descricao = 'Macarrão: Um prato de macarrão com molho de tomate e queijo';
                preco = 'R$ 20.00';
                break;
    
            default:
                descricao = 'Prato não encontrado';
                preco = '';
        }
    
        resultado.innerHTML = descricao + '<br>' + 'Preço: ' + preco;
    }`;
    
        let codigoElement = document.getElementById('codigo13');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;
        Prism.highlightElement(codigoElement);
    
}


function q14() {    

    let altura = parseFloat(document.getElementById('altura14').value);
    let peso = parseFloat(document.getElementById('peso14').value);

    let resultado = document.getElementById('output14');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = '';

    switch (true) {

        case (imc < 18.5):
            classificacao = 'Abaixo do Peso';
            break;

        case (imc >= 18.5 && imc < 25):
            classificacao = 'Peso Normal';
            break;

        case (imc >= 25 && imc < 30):
            classificacao = 'Sobrepeso';
            break;

        case (imc >= 30 && imc < 35):
            classificacao = 'Obesidade Grau I';
            break;

        case (imc >= 35 && imc < 40):
            classificacao = 'Obesidade Grau II';
            break;

        case (imc >= 40):
            classificacao = 'Obesidade Grau III';
            break;

        default:
            classificacao = 'Classificação não encontrada';
    }
    resultado.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + '<br>' + 'Classificação: ' + classificacao;
}

function q14Codigo() {
    

    let codigo = `
    function q14() {    

    let altura = parseFloat(document.getElementById('altura14').value);
    let peso = parseFloat(document.getElementById('peso14').value);

    let resultado = document.getElementById('output14');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = '';

    switch (true) {

        case (imc < 18.5):
            classificacao = 'Abaixo do Peso';
            break;

        case (imc >= 18.5 && imc < 25):
            classificacao = 'Peso Normal';
            break;

        case (imc >= 25 && imc < 30):
            classificacao = 'Sobrepeso';
            break;

        case (imc >= 30 && imc < 35):
            classificacao = 'Obesidade Grau I';
            break;

        case (imc >= 35 && imc < 40):
            classificacao = 'Obesidade Grau II';
            break;

        case (imc >= 40):
            classificacao = 'Obesidade Grau III';
            break;

        default:
            classificacao = 'Classificação não encontrada';
    }
    resultado.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + '<br>' + 'Classificação: ' + classificacao;
}`;

    let codigoElement = document.getElementById('codigo14');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q15() {

    let numero = parseInt(document.getElementById('numero15').value);
    let resultado = document.getElementById('output15');
    resultado.innerHTML = ''; // Limpar o conteúdo anterior

    if (isNaN(numero) || numero <= 0) {
        resultado.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let i = 0;
    while (i <= numero) {
        if (i % 2 === 0) {
            resultado.innerHTML += i + '  ';
        }
        i++;
    }
}

function q15Codigo() {
    

    let codigo = `
function q15() {
    let numero = parseInt(document.getElementById('numero15').value);
    let resultado = document.getElementById('output15');
    resultado.innerHTML = '';

    if (isNaN(numero) || numero <= 0) {
        resultado.innerHTML = "Por favor, digite um número positivo válido.";
        return;
    }

    let i = 0;
    while (i <= numero) {
        if (i % 2 === 0) {
            resultado.innerHTML += i + ' ';
        }
        i++;
    }
}`;
    let codigoElement = document.getElementById('codigo15');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}


function q16() {
    // Limpar o conteúdo anterior
    document.getElementById('output16').innerHTML = '';

    // Obter os dados inseridos pelo usuário
    let numero = parseInt(document.getElementById('numero16').value);

    // Validar se o número é positivo
    if (isNaN(numero) || numero <= 0) {
        document.getElementById('output16').innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    for (let i = 1; i <= numero; i++) {
        if (numero % 2 !== 0) {
            document.getElementById('output16').innerHTML += i + ' ';
        }
    }
}

function q16Codigo() {
    
        let codigo = `
function q16() {
    // Limpar o conteúdo anterior
    document.getElementById('output16').innerHTML = '';

    // Obter os dados inseridos pelo usuário
    let numero = parseInt(document.getElementById('numero16').value);

    // Validar se o número é positivo
    if (isNaN(numero) || numero <= 0) {
        document.getElementById('output16').innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    for (let i = 1; i <= numero; i++) {
        if (numero % 2 !== 0) {
            document.getElementById('output16').innerHTML += i + ' ';
        }
    }
}
        `;
        let codigoElement = document.getElementById('codigo16');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;

        Prism.highlightElement(codigoElement);
}        

function q17() {

    let numero = parseInt(document.getElementById('numero17').value);
    
    if (isNaN(numero) || numero <= 0) {
        document.getElementById('output17').innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('output17').innerHTML = `O fatorial de ${numero} é ${fatorial}`;
}

function q17Codigo() {
    

    let codigo = `
function q17() {

    let numero = parseInt(document.getElementById('numero17').value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById('output17').innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('output17').innerHTML = 'O fatorial de ' + numero + ' é ' + fatorial;
}`;
    let codigoElement = document.getElementById('codigo17');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);

}

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function q18() {
    
        let palpite = parseInt(document.getElementById('palpite18').value);
        let output = document.getElementById('output18');

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            output.innerHTML = 'Por favor, insira um número entre 1 e 100.';
            return;
        }

        tentativasRestantes--;

        if (palpite === numeroSecreto) {
            output.innerHTML = `Parabéns! Você acertou o número secreto ${numeroSecreto}.`;
            resetGame();
        } else if (tentativasRestantes === 0) {
            output.innerHTML = `Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`;
            resetGame();
        } else if (palpite < numeroSecreto) {
            output.innerHTML = `O número secreto é maior. Tentativas restantes: ${tentativasRestantes}`;
        } else {
            output.innerHTML = `O número secreto é menor. Tentativas restantes: ${tentativasRestantes}`;
        }
}



function resetGame() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
}

function q18Codigo() {
        
    
        let codigo = `

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

function q18() {
    
        let palpite = parseInt(document.getElementById('palpite18').value);
        let output = document.getElementById('output18');

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            output.innerHTML = 'Por favor, insira um número entre 1 e 100.';
            return;
        }

        tentativasRestantes--;

        if (palpite === numeroSecreto) {
            output.innerHTML = 'Parabéns! Você acertou o número secreto + numeroSecreto.';
            resetGame();
        } else if (tentativasRestantes === 0) {
            output.innerHTML = 'Suas tentativas acabaram. O número secreto era + numeroSecreto.';
            resetGame();
        } else if (palpite < numeroSecreto) {
            output.innerHTML = 'O número secreto é maior. Tentativas restantes: + tentativasRestantes}';
        } else {
            output.innerHTML = 'O número secreto é menor. Tentativas restantes: + tentativasRestantes' ;
        }
}



function resetGame() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
}`;
        let codigoElement = document.getElementById('codigo18');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;

        Prism.highlightElement(codigoElement);
}

function q19() {

    document.getElementById('numero19').innerText = "A mágica em JS continua!";
}

function q19Codigo() {
    

    let codigo = `
function q19() {

    document.getElementById('numero19').innerText = "A mágica em JS continua!";
}`;

    let codigoElement = document.getElementById('codigo19');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q20() {
    document.getElementById('numero20').style.color = 'green';
}

function q20Codigo() {

    let codigo = `
function q20() {
    document.getElementById('numero20').style.color = 'green';
}`;

    let codigoElement = document.getElementById('codigo20');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function hiddenQ21() {
    document.getElementById('numero21').style.display = 'none';
}

function showQ21() {
    document.getElementById('numero21').style.display = 'block';
}

function q21Codigo() {

    let codigo = `
function hiddenQ21() {
    document.getElementById('numero21').style.display = 'none';
}

function showQ21() {
    document.getElementById('numero21').style.display = 'block';
}
`;

    let codigoElement = document.getElementById('codigo21');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q22() {

    let imagem = document.getElementById('imagem22');
    imagem.src = 'https://www.uninabuco.edu.br/sites/joaquimnabuco.edu.br/files/fields/imagemTopo/noticias/2018/01/2542_0.jpg';
}

function q22Codigo() {

    let codigo = `
    function q22() {

    let imagem = document.getElementById('imagem22');
    imagem.src = 'https://www.uninabuco.edu.br/sites/joaquimnabuco.edu.br/files/fields/imagemTopo/noticias/2018/01/2542_0.jpg';
}`;

    let codigoElement = document.getElementById('codigo22');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q23(largura, altura) {

    let imagem = document.getElementById('imagem23');
    imagem.style.width = largura + 'px';
    imagem.style.height = altura + 'px';
}

function q23Codigo() {

    let codigo = `
    function q23(largura, altura) {

    let imagem = document.getElementById('imagem23');
    imagem.style.width = largura + 'px';
    imagem.style.height = altura + 'px';
}`;

    let codigoElement = document.getElementById('codigo23');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);

}

function q24(src) {

    let imagem = document.getElementById('imagemDisplay');
    imagem.src = src;
}

function q24Codigo() {

    let codigo = `
    function q24(src) {

    let imagem = document.getElementById('imagemDisplay');
    imagem.src = src;
}`;

    let codigoElement = document.getElementById('codigo24');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q25() {

    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero25').value;

    // dividir a string em um array de substrings
    let numerosArray = numero.split(',');

    // converter o array de strings em um array de números
    let numeros = numerosArray.map(Number);

    // calcular a soma dos números

    let soma = numeros.reduce((acc, curr) => acc + curr, 0);

    // calcular a média dos números
    let media = soma / numeros.length;

    // arredondar a média para 2 casas decimais
    let mediaArredondada = media.toFixed(2);

    // obter a data e hora atuais
    let dataAtual = new Date();
    let dataFormatada = dataAtual.toLocaleString('pt-BR');

    // mostrar os resultados
    let resultado = document.getElementById('output25');
    resultado.innerHTML = `Soma: ${soma}, Média: ${mediaArredondada}, Data e Hora: ${dataFormatada}`;

}

function q25Codigo() {

    let codigo = `
    function q25() {

    // Obter os dados inseridos pelo usuário
    let numero = document.getElementById('numero25').value;

    // dividir a string em um array de substrings
    let numerosArray = numero.split(',');

    // converter o array de strings em um array de números
    let numeros = numerosArray.map(Number);

    // calcular a soma dos números

    let soma = numeros.reduce((acc, curr) => acc + curr, 0);

    // calcular a média dos números
    let media = soma / numeros.length;

    // arredondar a média para 2 casas decimais
    let mediaArredondada = media.toFixed(2);

    // obter a data e hora atuais
    let dataAtual = new Date();
    let dataFormatada = dataAtual.toLocaleString('pt-BR');

    // mostrar os resultados
    let resultado = document.getElementById('output25');
    resultado.innerHTML = 'Soma: ' + soma + ', Média: ' + mediaArredondada + ', Data e Hora: ' + dataFormatada;
}`;

    let codigoElement = document.getElementById('codigo25');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);

}

function q26() {

    alert('Mensagem de teste');
}

function q26Codigo() {

    let codigo = `
    function q26() {
    alert('Mensagem de teste');
}`;

    let codigoElement = document.getElementById('codigo26');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q27() {
    // Obter os dados inseridos pelo usuário
    let num1 = parseFloat(document.getElementById('numeroQ27-1').value);
    let num2 = parseFloat(document.getElementById('numeroQ27-2').value);
    let num3 = parseFloat(document.getElementById('numeroQ27-3').value);

    // Verificar se os números são válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('output27').innerHTML = 'Por favor, insira números válidos.';
        return;
    }

    // Calcular a média
    let media = (num1 + num2 + num3) / 3;

    // Mostrar a média
    document.getElementById('output27').innerHTML = `A média dos números ${num1}, ${num2} e ${num3} é: é ${media.toFixed(2)}`;
}

function q27Codigo() {

    let codigo = `
    function q27() {
    // Obter os dados inseridos pelo usuário
    let num1 = parseFloat(document.getElementById('numeroQ27-1').value);
    let num2 = parseFloat(document.getElementById('numeroQ27-2').value);
    let num3 = parseFloat(document.getElementById('numeroQ27-3').value);

    // Verificar se os números são válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('output27').innerHTML = 'Por favor, insira números válidos.';
        return;
    }

    // Calcular a média
    let media = (num1 + num2 + num3) / 3;

    // Mostrar a média
    document.getElementById('output27').innerHTML = 'A média dos números + num1, + num2 e + num3 é: é + media.toFixed(2)}';
}`;

    let codigoElement = document.getElementById('codigo27');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

function q28() {

    // Obter os dados inseridos pelo usuário
    let numero = parseInt(document.getElementById('numeroQ28').value);

    // Verificar se o número é válido
    if (isNaN(numero)) {
        document.getElementById('output28').innerHTML = 'Por favor, insira um número válido.';
        return;
    }

    // Calcular o quadrado do número
    let quadrado = numero * numero;

    // Mostrar o resultado
    document.getElementById('output28').innerHTML = `O quadrado de ${numero} é ${quadrado}`;
}

function q28Codigo() {

    let codigo = `
    function q28() {
    // Obter os dados inseridos pelo usuário
    let numero = parseInt(document.getElementById('numeroQ28').value);

    // Verificar se o número é válido
    if (isNaN(numero)) {
        document.getElementById('output28').innerHTML = 'Por favor, insira um número válido.';
        return;
    }

    // Calcular o quadrado do número
    let quadrado = numero * numero;

    // Mostrar o resultado
    document.getElementById('output28').innerHTML = 'O quadrado de ' + numero + ' é ' + quadrado;
}`;

    let codigoElement = document.getElementById('codigo28');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}

let globalVariable = "Eu sou uma variável global"

function q29() {
    let localVariable = "Eu sou uma variável local";

    document.getElementById('output29').innerHTML = globalVariable + '<br>' + localVariable;
}

function q29Codigo() {
    
        let codigo = `
        let globalVariable = "Eu sou uma variável global"
    
        function q29() {
            let localVariable = "Eu sou uma variável local";
    
            document.getElementById('output29').innerHTML = globalVariable + '<br>' + localVariable;
        }`;
    
        let codigoElement = document.getElementById('codigo29');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;
    
        Prism.highlightElement(codigoElement);
}

function q30() {
    if (true) {
        let localVariable = "Eu sou uma variável local";
    }

    try {
        console.log(localVariable);
    }
    catch (error) {
        document.getElementById('output30').innerHTML = 'Erro: ' + error;
    }

    if (true) {
        var globalVariable = "Eu sou uma variável global";
    }

    document.getElementById('output30').innerHTML = globalVariable;
}

function q30Codigo() {
        
            let codigo = `
            function q30() {
                if (true) {
                    let localVariable = "Eu sou uma variável local";
                }
            
                try {
                    console.log(localVariable);
                }
                catch (error) {
                    document.getElementById('output30').innerHTML = 'Erro: ' + error;
                }
            
                if (true) {
                    var globalVariable = "Eu sou uma variável global";
                }
            
                document.getElementById('output30').innerHTML = globalVariable;
            }`;
        
            let codigoElement = document.getElementById('codigo30');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
    
}

function q31() {
    
    // obter os dados inseridos pelo usuário
    let num1 = parseFloat(document.getElementById('numeroQ31-1').value);
    let num2 = parseFloat(document.getElementById('numeroQ31-2').value);

    // verificar se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('output31').innerHTML = 'Por favor, insira números válidos.';
        return;
    }

    // Chamando a função para calcular a média
    let media = calcularMediaQ31(num1, num2);

    // Mostrar o resultado
    document.getElementById('output31').innerHTML = `A média dos números ${num1} e ${num2} é: ${media.toFixed(2)}`;
}

function calcularMediaQ31(num1, num2) {
    return (num1 + num2) / 2;
}

function q31Codigo() {
    
        let codigo = `
        function q31() {
        
        // obter os dados inseridos pelo usuário
        let num1 = parseFloat(document.getElementById('numeroQ31-1').value);.
        let num2 = parseFloat(document.getElementById('numeroQ31-2').value);
    
        // verificar se os números são válidos
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('output31').innerHTML = 'Por favor, insira números válidos.';
            return;
        }
    
        // Chamando a função para calcular a média
        let media = calcularMediaQ31(num1, num2);
    
        // Mostrar o resultado
        document.getElementById('output31').innerHTML = 'A média dos números ' + num1 + ' e ' + num2 + ' é: ' + media.toFixed(2);
    }

    function calcularMediaQ31(num1, num2) {
        return (num1 + num2) / 2;
    }`;

    let codigoElement = document.getElementById('codigo31');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
    
}

// Questão 32 - Gerando um número aleatório entre 1 e 100
const numeroAleatorioQ32 = Math.floor(Math.random() * 100) + 1;

function q32() {

    // Verificar o palpite do usuário
    let palpite = parseInt(document.getElementById('palpiteQ32').value);

    // Verificar se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById('output32').innerHTML = 'Por favor, insira um número entre 1 e 100.';
        return;
    }

    // reduzir o número de tentativas
    tentativasRestantes--;

    // Verificar se o palpite é correto
    if (palpite == numeroAleatorioQ32) {
        resultadoPalpite(`Parabéns! Você acertou o número ${numeroAleatorioQ32} em ${10 - tentativasRestantes} tentativas.`);
    } else {
        // Verificar se maior ou menor
        let mensagem = palpite < numeroAleatorioQ32 ? 'Tente um número maior.' : 'Tente um número menor.';
        resultadoPalpite(`Seu palpite de ${palpite} está incorreto. ${mensagem} Tentativas restantes: ${tentativasRestantes}.`);
    }
    
    if (tentativasRestantes === 0 && palpite !== numeroAleatorioQ32) {
        resultadoPalpite(`Suas tentativas acabaram. O número secreto era ${numeroAleatorioQ32}.`);
    }
}

function resultadoPalpite(mensagem) {
    document.getElementById('output32').innerHTML += `<p>${mensagem}</p>`;
}

function q32Codigo() {
        
        let codigo = `
        // Questão 32 - Gerando um número aleatório entre 1 e 100
        const numeroAleatorioQ32 = Math.floor(Math.random() * 100) + 1;
    
        function q32() {
    
            // Verificar o palpite do usuário
            let palpite = parseInt(document.getElementById('palpiteQ32').value);
    
            // Verificar se o palpite é válido
            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                document.getElementById('output32').innerHTML = 'Por favor, insira um número entre 1 e 100.';
                return;
            }
    
            // reduzir o número de tentativas
            tentativasRestantes--;
    
            // Verificar se o palpite é correto
            if (palpite == numeroAleatorioQ32) {
                resultadoPalpite('Parabéns! Você acertou o número + numeroAleatorioQ32 + em + 10 - tentativasRestantes + ' tentativas.');
            } else {
                // Verificar se maior ou menor
                let mensagem = palpite < numeroAleatorioQ32 ? 'Tente um número maior.' : 'Tente um número menor.';
                resultadoPalpite('Seu palpite de ' + palpite + ' está incorreto. ' + mensagem + ' Tentativas restantes: ' + tentativasRestantes + '.');
            }
            
            if (tentativasRestantes === 0 && palpite !== numeroAleatorioQ32) {
                resultadoPalpite('Suas tentativas acabaram. O número secreto era ' + numeroAleatorioQ32 + '.');
            }
        }
    
        function resultadoPalpite(mensagem) {
            document.getElementById('output32').innerHTML += '<p>' + mensagem + '</p>';
        }`;
    
        let codigoElement = document.getElementById('codigo32');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;
    
        Prism.highlightElement(codigoElement);
    
}


function q33(operacao) {

    let num1 = parseFloat(document.getElementById('numeroQ33-1').value);
    let num2 = parseFloat(document.getElementById('numeroQ33-2').value);

    switch (operacao) {

        case '+':
            adicao(num1, num2);
            break;

        case '-':
            subtracao(num1, num2);
            break;

        case '*':
            multiplicacao(num1, num2);
            break;

        case '/':
            divisao(num1, num2);
            break;

        default:
            document.getElementById('output33').innerHTML = 'Operação inválida.';

    }
            
}

function adicao(num1, num2) {
    resultadoQ33(num1 + num2, '+');
}

function subtracao(num1, num2) {
    resultadoQ33(num1 - num2, '-');
}

function multiplicacao(num1, num2) {
    resultadoQ33(num1 * num2, '*');
}

function divisao(num1, num2) {
    if (num2 === 0) {
        document.getElementById('output33').innerHTML = 'Não é possível dividir por zero.';
        return;
    }
    resultadoQ33(num1 / num2, '/');
}

function resultadoQ33(resultado, operacao) {
    document.getElementById('output33').innerHTML = `${resultado.toFixed(2)} (Operação: ${operacao})`;
}

function q33Codigo() {

    let codigo = `
    function q33(operacao) {

        let num1 = parseFloat(document.getElementById('numeroQ33-1').value);
        let num2 = parseFloat(document.getElementById('numeroQ33-2').value);
    
        switch (operacao) {
    
            case '+':
                adicao(num1, num2);
                break;
    
            case '-':
                subtracao(num1, num2);
                break;
    
            case '*':
                multiplicacao(num1, num2);
                break;
    
            case '/':
                divisao(num1, num2);
                break;
    
            default:
                document.getElementById('output33').innerHTML = 'Operação inválida.';
    
        }
                
    }
    
    function adicao(num1, num2) {
        resultadoQ33(num1 + num2, '+');
    }
    
    function subtracao(num1, num2) {
        resultadoQ33(num1 - num2, '-');
    }
    
    function multiplicacao(num1, num2) {
        resultadoQ33(num1 * num2, '*');
    }
    
    function divisao(num1, num2) {
        if (num2 === 0) {
            document.getElementById('output33').innerHTML = 'Não é possível dividir por zero.';
            return;
        }
        resultadoQ33(num1 / num2, '/');
    }
    
    function resultadoQ33(resultado, operacao) {
        document.getElementById('output33').innerHTML = resultado.toFixed(2) + ' (Operação: ' + operacao + ')';
    }`;

    let codigoElement = document.getElementById('codigo33');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);


}

function lerValorReal() {
    return parseFloat(document.getElementById('numeroQ34').value);
}

function converterParaDolar(valorReal) {

    const taxaCambio = 5.36;
    return valorReal / taxaCambio;
}

function exibirResultado(valorDolar) {
    const resultadoElement = document.getElementById('output34').innerHTML = `O valor em dólar é: $${valorDolar.toFixed(2)}`;
}

function q34() {

    const valorReal = lerValorReal();

    if (isNaN(valorReal) || valorReal <= 0) {
        document.getElementById('output34').innerHTML = 'Por favor, insira um valor válido.';
        return;
    }

    const valorDolar = converterParaDolar(valorReal);
    exibirResultado(valorDolar);
}

function q34Codigo() {
    
        let codigo = `
        function lerValorReal() {
            return parseFloat(document.getElementById('numeroQ34').value);
        }
        
        function converterParaDolar(valorReal) {
        
            const taxaCambio = 5.36;
            return valorReal / taxaCambio;
        }
        
        function exibirResultado(valorDolar) {
            const resultadoElement = document.getElementById('output34').innerHTML = 'O valor em dólar é: $' + valorDolar.toFixed(2);
        }
        
        function q34() {
        
            const valorReal = lerValorReal();
        
            if (isNaN(valorReal) || valorReal <= 0) {
                document.getElementById('output34').innerHTML = 'Por favor, insira um valor válido.';
                return;
            }
        
            const valorDolar = converterParaDolar(valorReal);
            exibirResultado(valorDolar);
        }`;
    
        let codigoElement = document.getElementById('codigo34');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;
    
        Prism.highlightElement(codigoElement);
    
    
}

function lerAltura() {
    return parseFloat(document.getElementById('numeroQ35-1').value);
}

function lerPeso() {
    return parseFloat(document.getElementById('numeroQ35-2').value);
}

function calcularIMC() {

    const altura = lerAltura();
    const peso = lerPeso();

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('output35').innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    exibirResultadoIMC(imc);
}

function exibirResultadoIMC(imc) {
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }

    const resultadoElementIMC = document.getElementById('output35');
    resultadoElementIMC.textContent = `Seu IMC é ${imc.toFixed(2)} e você está ${classificacao}.`
}

function q35() {

    const altura = lerAltura();
    const peso = lerPeso();

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('output35').innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    exibirResultadoIMC(imc);
}

function q35Codigo() {
        
            let codigo = `
            function lerAltura() {
                return parseFloat(document.getElementById('numeroQ35-1').value);
            }
            
            function lerPeso() {
                return parseFloat(document.getElementById('numeroQ35-2').value);
            }
            
            function calcularIMC() {
            
                const altura = lerAltura();
                const peso = lerPeso();
            
                if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
                    document.getElementById('output35').innerHTML = 'Por favor, insira valores válidos.';
                    return;
                }
            
                const imc = peso / (altura * altura);
                exibirResultadoIMC(imc);
            }
            
            function exibirResultadoIMC(imc) {
                let classificacao = '';
            
                if (imc < 18.5) {
                    classificacao = 'Abaixo do Peso';
                } else if (imc >= 18.5 && imc < 25) {
                    classificacao = 'Peso Normal';
                } else if (imc >= 25 && imc < 30) {
                    classificacao = 'Sobrepeso';
                } else if (imc >= 30 && imc < 35) {
                    classificacao = 'Obesidade Grau I';
                } else if (imc >= 35 && imc < 40) {
                    classificacao = 'Obesidade Grau II';
                } else {
                    classificacao = 'Obesidade Grau III';
                }
            
                const resultadoElementIMC = document.getElementById('output35');
                resultadoElementIMC.textContent = 'Seu IMC é ' + imc.toFixed(2) + ' e você está ' + classificacao + '.';
            }`;
        
            let codigoElement = document.getElementById('codigo35');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
        
    }  


function criarObjetoAluno() {
    // Obter os dados inseridos pelo usuário
    const nome = document.getElementById('numeroQ36-1').value;
    const idade = parseInt(document.getElementById('numeroQ36-2').value);
    const curso = document.getElementById('numeroQ36-3').value;
    const notas = document.getElementById('numeroQ36-4').value.split(',').map(Number);

    const aluno = {
        nome: nome,
        idade: idade,
        curso: curso,
        notas: notas
    };

    return aluno;
}

function q36() {
    
        const aluno = criarObjetoAluno();
        const resultadoElement = document.getElementById('output36');

        const dadosAluno = `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Notas: ${aluno.notas.join(', ')}`;

        resultadoElement.innerHTML = dadosAluno;
}

function q36Codigo() {
        
            let codigo = `
            function criarObjetoAluno() {
                // Obter os dados inseridos pelo usuário
                const nome = document.getElementById('numeroQ36-1').value;
                const idade = parseInt(document.getElementById('numeroQ36-2').value);
                const curso = document.getElementById('numeroQ36-3').value;
                const notas = document.getElementById('numeroQ36-4').value.split(',').map(Number);
            
                const aluno = {
                    nome: nome,
                    idade: idade,
                    curso: curso,
                    notas: notas
                };
            
                return aluno;
            }
            
            function q36() {
            
                const aluno = criarObjetoAluno();
                const resultadoElement = document.getElementById('output36');
            
                const dadosAluno = 'Nome: ' + aluno.nome + ', Idade: ' + aluno.idade + ', Curso: ' + aluno.curso + ', Notas: ' + aluno.notas.join(', ');
            
                resultadoElement.innerHTML = dadosAluno;
            }`;
        
            let codigoElement = document.getElementById('codigo36');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
        
    }

function criarObjetoCarro() {    

    const marca = document.getElementById('numeroQ37-1').value;
    const modelo = document.getElementById('numeroQ37-2').value;
    const ano = parseInt(document.getElementById('numeroQ37-3').value);

    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano
    };

    return carro;
}

function q37() {
    const carro = criarObjetoCarro();
    const resultadoElement = document.getElementById('output37');

    const resultadoCarro = `A marca do carro é ${carro.marca}.`;

    resultadoElement.textContent = resultadoCarro;
}

function q37Codigo() {
        
            let codigo = `
            function criarObjetoCarro() {    
        
                const marca = document.getElementById('numeroQ37-1').value;
                const modelo = document.getElementById('numeroQ37-2').value;
                const ano = parseInt(document.getElementById('numeroQ37-3').value);
            
                const carro = {
                    marca: marca,
                    modelo: modelo,
                    ano: ano
                };
            
                return carro;
            }
            
            function q37() {
                const carro = criarObjetoCarro();
                const resultado = document.getElementById('output37');
            
                resultadoElement.textContent = 'A marca do carro é ' + carro.marca + '.';
            }`;
        
            let codigoElement = document.getElementById('codigo37');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
        
    }

function criarObjetoLivro() {
    const titulo = document.getElementById('numeroQ38-1').value;
    const autor = document.getElementById('numeroQ38-2').value;
    const anoPublicacao = parseInt(document.getElementById('numeroQ38-3').value);

    // Verificar se os campos foram preenchidos
    if (!titulo || !autor || !anoPublicacao) {
        return null;
    }

    const livro = {
        titulo: titulo,
        autor: autor,
        ano: anoPublicacao
    };

    return livro;

}

function q38() {
    const livro = criarObjetoLivro();
    const resultadoElement = document.getElementById('output38');

    if (livro === null) {
        resultadoElement.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    const resultadoLivro = `O livro ${livro.titulo} foi escrito por ${livro.autor} e publicado em ${livro.ano}.`;

    resultadoElement.textContent = resultadoLivro;
}

function q38Codigo() {
        
            let codigo = `
            function criarObjetoLivro() {
                const titulo = document.getElementById('numeroQ38-1').value;
                const autor = document.getElementById('numeroQ38-2').value;
                const anoPublicacao = parseInt(document.getElementById('numeroQ38-3').value);
            
                // Verificar se os campos foram preenchidos
                if (!titulo || !autor || !anoPublicacao) {
                    return null;
                }
            
                const livro = {
                    titulo: titulo,
                    autor: autor,
                    ano: anoPublicacao
                };
            
                return livro;
            
            }
            
            function q38() {
                const livro = criarObjetoLivro();
                const resultadoElement = document.getElementById('output38');
            
                if (livro === null) {
                    resultadoElement.textContent = 'Por favor, preencha todos os campos.';
                    return;
                }
            
                const resultadoLivro = 'O livro ' + livro.titulo + ' foi escrito por ' + livro.autor + ' e publicado em ' + livro.ano + '.';
            
                resultadoElement.textContent = resultadoLivro;
            }`;
    
            let codigoElement = document.getElementById('codigo38');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
    
            Prism.highlightElement(codigoElement);
    
    }

function criarObjetoProduto() {
    const nome = document.getElementById('numeroQ39-1').value;
    const preco = parseFloat(document.getElementById('numeroQ39-2').value);
    const quantidade = parseInt(document.getElementById('numeroQ39-3').value);

    if (!nome || isNaN(preco) || isNaN(quantidade)) {
        return null;
    }

    const produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    return produto;
}

function q39() {
    const produto = criarObjetoProduto();
    const resultadoElement = document.getElementById('output39');

    if (produto === null) {
        resultadoElement.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    const resultadoProduto = `O produto ${produto.nome} custa R$${produto.preco.toFixed(2)} e tem ${produto.quantidade} unidades em estoque.`;

    resultadoElement.textContent = resultadoProduto;
}

function q39Codigo() {
            
                let codigo = `
                function criarObjetoProduto() {
                    const nome = document.getElementById('numeroQ39-1').value;
                    const preco = parseFloat(document.getElementById('numeroQ39-2').value);
                    const quantidade = parseInt(document.getElementById('numeroQ39-3').value);
                
                    if (!nome || isNaN(preco) || isNaN(quantidade)) {
                        return null;
                    }
                
                    const produto = {
                        nome: nome,
                        preco: preco,
                        quantidade: quantidade
                    };
                
                    return produto;
                }
                
                function q39() {
                    const produto = criarObjetoProduto();
                    const resultadoElement = document.getElementById('output39');
                
                    if (produto === null) {
                        resultadoElement.textContent = 'Por favor, preencha todos os campos.';
                        return;
                    }
                
                    const resultadoProduto = 'O produto ' + produto.nome + ' custa R$' + produto.preco.toFixed(2) + ' e tem ' + produto.quantidade + ' unidades em estoque.';
                
                    resultadoElement.textContent = resultadoProduto;
                }`;
        
                let codigoElement = document.getElementById('codigo39');
                codigoElement.innerHTML = '';
                codigoElement.textContent = codigo;
        
                Prism.highlightElement(codigoElement);
        
        }

function q40() {
    const nome = document.getElementById('numeroQ40').value;
    const numeroCaracteres = nome.length;
    const resultadoElement = document.getElementById('output40');

    resultadoElement.textContent = `O nome ${nome} tem ${numeroCaracteres} caracteres.`;
}

function q40Codigo() {

    let codigo = `
    function q40() {
        const nome = document.getElementById('numeroQ40').value;
        const numeroCaracteres = nome.length;
        const resultadoElement = document.getElementById('output40');

        resultadoElement.textContent = 'O nome ' + nome + ' tem ' + numeroCaracteres + ' caracteres.';
    }`;

    let codigoElement = document.getElementById('codigo40');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
            
}

function q41() {
    const nomeCompleto = document.getElementById('numeroQ41').value.trim();
    const nomeArray = nomeCompleto.split(' ');

    if (nomeArray.length < 2) {
        document.getElementById('output41').textContent = 'Por favor, insira um nome completo.';
        return;
    }

    const primeiroNome = nomeArray[0];
    const ultimoNome = nomeArray[nomeArray.length - 1];

    const resultadoElement = document.getElementById('output41');
    resultadoElement.textContent = `Primeiro nome: ${primeiroNome}, Último nome: ${ultimoNome}`;
}

function q41Codigo() {
    
        let codigo = `
        function q41() {
            const nomeCompleto = document.getElementById('numeroQ41').value.trim();
            const nomeArray = nomeCompleto.split(' ');
    
            if (nomeArray.length < 2) {
                document.getElementById('output41').textContent = 'Por favor, insira um nome completo.';
                return;
            }
    
            const primeiroNome = nomeArray[0];
            const ultimoNome = nomeArray[nomeArray.length - 1];
    
            const resultadoElement = document.getElementById('output41');
            resultadoElement.textContent = 'Primeiro nome: ' + primeiroNome + ', Último nome: ' + ultimoNome;
        }`;
    
        let codigoElement = document.getElementById('codigo41');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;
    
        Prism.highlightElement(codigoElement);
                
    }

function q42() {
    const nomeCompleto = document.getElementById('numeroQ42').value.trim();
    const nomeArray = nomeCompleto.split(' ');

    if(!nomeCompleto) {
        document.getElementById('output42').textContent = 'Por favor, insira um nome.';
        return;
    }

    const resultadoElement = document.getElementById('output42');
    resultadoElement.textContent = `O primeiro nome: ${nomeArray}`;
}

function q42Codigo() {
        
            let codigo = `
            function q42() {
                const nomeCompleto = document.getElementById('numeroQ42').value.trim();
                const nomeArray = nomeCompleto.split(' ');
        
                if(!nomeCompleto) {
                    document.getElementById('output42').textContent = 'Por favor, insira um nome.';
                    return;
                }
        
                const resultadoElement = document.getElementById('output42');
                resultadoElement.textContent = 'O primeiro nome: ' + nomeArray;
            }`;
        
            let codigoElement = document.getElementById('codigo42');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
                    
}

function q43() {
    const frase = document.getElementById('numeroQ43').value;
    const fraseMaiuscula = frase.toUpperCase();

    const resultadoElement = document.getElementById('output43');
    resultadoElement.textContent = `Frase em Maiúsculas: ${fraseMaiuscula}`;
}

function q43Codigo() {
        
            let codigo = `
            function q43() {
                const frase = document.getElementById('numeroQ43').value;
                const fraseMaiuscula = frase.toUpperCase();
            
                const resultadoElement = document.getElementById('output43');
                resultadoElement.textContent = 'Frase em Maiúsculas: ' + fraseMaiuscula;
            }`;
        
            let codigoElement = document.getElementById('codigo43');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
                    
        }

function q44() {
    const filmes = [
        document.getElementById('numeroQ44-1').value,
        document.getElementById('numeroQ44-2').value,
        document.getElementById('numeroQ44-3').value,
        document.getElementById('numeroQ44-4').value,
        document.getElementById('numeroQ44-5').value
    ];

    for (let i = 0; i < filmes.length; i++) {
        console.log(filmes[i]);
    }

    const resultadoElement = document.getElementById('output44');
    resultadoElement.textContent = `Filmes informados: ${filmes.join(', ')}`;
}

function q44Codigo(){
        
            let codigo = `
            function q44() {
                const filmes = [
                    document.getElementById('numeroQ44-1').value,
                    document.getElementById('numeroQ44-2').value,
                    document.getElementById('numeroQ44-3').value,
                    document.getElementById('numeroQ44-4').value,
                    document.getElementById('numeroQ44-5').value
                ];
            
                for (let i = 0; i < filmes.length; i++) {
                    console.log(filmes[i]);
                }
            
                const resultadoElement = document.getElementById('output44');
                resultadoElement.textContent = 'Filmes informados: ' + filmes.join(', ');
            }`;
        
            let codigoElement = document.getElementById('codigo44');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
                    
        
}

function q45() {

    function adicionarUsuario() {
        const nome = document.getElementById('addNome').value;
        const email = document.getElementById('addEmail').value;
        const senha = document.getElementById('addSenha').value;
        const resultado = addUser(nome, email, senha);
        document.getElementById('addResultado').textContent = resultado;
        atualizarListaUsuarios();
    
        console.log(atualizarListaUsuarios());
    }
    
    function removerUsuario() { 
        const email = document.getElementById('removeEmail').value;
        const resultado = removeUser(email);
        document.getElementById('removeResultado').textContent = resultado;
        atualizarListaUsuarios();
    }
    
    function atualizarUsuario() {
        const email = document.getElementById('updateEmail').value;
        const newNome = document.getElementById('updateNome').value;
        const newEmail = document.getElementById('updateNewEmail').value;
        const newSenha = document.getElementById('updateSenha').value;
        const resultado = updateUser(email, newNome, newEmail, newSenha);
        document.getElementById('updateResultado').textContent = resultado;
        atualizarListaUsuarios();
    }
    
    function atualizarListaUsuarios() {
        const usersList = listUsers();
        const usersContainer = document.getElementById('usersContainer');
        usersContainer.innerHTML = '';
        usersList.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.textContent = `Nome: ${user.nome}, Email: ${user.email}, Senha: ${user.senha}`;
            usersContainer.appendChild(userDiv);
        });
    }
    
    document.getElementById('addButton').addEventListener('click', adicionarUsuario);
    document.getElementById('removeButton').addEventListener('click', removerUsuario);
    document.getElementById('updateButton').addEventListener('click', atualizarUsuario);
    
    document.addEventListener('DOMContentLoaded', atualizarListaUsuarios);
    }
    
function q45Codigo() {

    let codigo = `
    function adicionarUsuario() {
        const nome = document.getElementById('addNome').value;
        const email = document.getElementById('addEmail').value;
        const senha = document.getElementById('addSenha').value;
        const resultado = addUser(nome, email, senha);
        document.getElementById('addResultado').textContent = resultado;
        atualizarListaUsuarios();
    
        console.log(atualizarListaUsuarios());
    }
    
    function removerUsuario() { 
        const email = document.getElementById('removeEmail').value;
        const resultado = removeUser(email);
        document.getElementById('removeResultado').textContent = resultado;
        atualizarListaUsuarios();
    }
    
    function atualizarUsuario() {
        const email = document.getElementById('updateEmail').value;
        const newNome = document.getElementById('updateNome').value;
        const newEmail = document.getElementById('updateNewEmail').value;
        const newSenha = document.getElementById('updateSenha').value;
        const resultado = updateUser(email, newNome, newEmail, newSenha);
        document.getElementById('updateResultado').textContent = resultado;
        atualizarListaUsuarios();
    }
    
    function atualizarListaUsuarios() {
        const usersList = listUsers();
        const usersContainer = document.getElementById('usersContainer');
        usersContainer.innerHTML = '';
        usersList.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.textContent = 'Nome: ' + user.nome + ', Email: ' + user.email + ', Senha: ' + user.senha;
            usersContainer.appendChild(userDiv);
        });
    }
    
    document.getElementById('addButton').addEventListener('click', adicionarUsuario);
    document.getElementById('removeButton').addEventListener('click', removerUsuario);
    document.getElementById('updateButton').addEventListener('click', atualizarUsuario);
    
    document.addEventListener('DOMContentLoaded', atualizarListaUsuarios);`;

    let codigoElement = document.getElementById('codigo45');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);
}



function converterDiasEmMinutos() {
    const dias = parseInt(document.getElementById('diasQ46').value);
    const minutos = Converter4.daysToMinutes(dias);
    document.getElementById('output46').textContent = `${dias} dias são equivalentes a ${minutos} minutos.`;
}

function converterGigabytesEmBytes() {
    const gigabytes = parseFloat(document.getElementById('gigabytesQ46').value);
    const bytes = Converter4.gigabytesToBytes(gigabytes);
    document.getElementById('output46').textContent = `${gigabytes} gigabytes são equivalentes a ${bytes} bytes.`;
}

function q46Codigo() {

    let codigo = `
    class Converter4 {
        static daysToMinutes(days) {
            return days * 24 * 60;
        }
    
        static gigabytesToBytes(gigabytes) {
            return gigabytes * 1024 * 1024 * 1024;
        }
    }
    
    function converterDiasEmMinutos() {
        const dias = parseInt(document.getElementById('diasQ46').value);
        const minutos = Converter4.daysToMinutes(dias);
        document.getElementById('output46').textContent = dias + ' dias são equivalentes a ' + minutos + ' minutos.';
    }
    
    function converterGigabytesEmBytes() {
        const gigabytes = parseFloat(document.getElementById('gigabytesQ46').value);
        const bytes = Converter4.gigabytesToBytes(gigabytes);
        document.getElementById('output46').textContent = gigabytes + ' gigabytes são equivalentes a ' + bytes + ' bytes.';
    }`;

    let codigoElement = document.getElementById('codigo46');
    codigoElement.innerHTML = '';
    codigoElement.textContent = codigo;

    Prism.highlightElement(codigoElement);

}

const caixa = document.getElementById('minhaCaixa');
caixa.addEventListener('mouseover', q47);
caixa.addEventListener('mouseout', q47);

function q47(evento) {
    const caixa = document.getElementById('minhaCaixa');
    if (evento.type === 'mouseover') {
        caixa.style.backgroundColor = 'red'; 
    } else if (evento.type === 'mouseout') {
        caixa.style.backgroundColor = 'blue'; 
    }
}

function q47Codigo() {
    
        let codigo = `
        const caixa = document.getElementById('minhaCaixa');
        caixa.addEventListener('mouseover', q47);
        caixa.addEventListener('mouseout', q47);
        
        function q47(evento) {
            const caixa = document.getElementById('minhaCaixa');
            if (evento.type === 'mouseover') {
                caixa.style.backgroundColor = 'red'; 
            } else if (evento.type === 'mouseout') {
                caixa.style.backgroundColor = 'blue'; 
            }
        }`;
    
        let codigoElement = document.getElementById('codigo47');
        codigoElement.innerHTML = '';
        codigoElement.textContent = codigo;
    
        Prism.highlightElement(codigoElement);
    
    
}

function q48() {
    const rendaMensal = parseFloat(document.getElementById('rendaMensalQ48').value);
    const idade = parseInt(document.getElementById('idadeQ48').value);

    if (rendaMensal >= 3000 && idade >= 18 && idade <= 65) {
        document.getElementById('output48').textContent = 'Você pode solicitar um cartão de crédito.';
    } else {
        document.getElementById('output48').textContent = 'Você não pode solicitar um cartão de crédito.';
    }
}

function q48Codigo() {
        
            let codigo = `
            function q48() {
                const rendaMensal = parseFloat(document.getElementById('rendaMensalQ48').value);
                const idade = parseInt(document.getElementById('idadeQ48').value);
            
                if (rendaMensal >= 3000 && idade >= 18 && idade <= 65) {
                    document.getElementById('output48').textContent = 'Você pode solicitar um cartão de crédito.';
                } else {
                    document.getElementById('output48').textContent = 'Você não pode solicitar um cartão de crédito.';
                }
            }`;
        
            let codigoElement = document.getElementById('codigo48');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
        
    
}

function q49() {
    const nome = document.getElementById('nomeQ49').value;
    const mensagem = `Olá, ${nome}! Seja bem-vindo!`;
    document.getElementById('output49').innerHTML = mensagem;
}

function q49Codigo() {
        
            let codigo = `
            function q49() {
                const nome = document.getElementById('nomeQ49').value;
                const mensagem = 'Olá, ' + nome + '! Seja bem-vindo!';
                document.getElementById('output49').innerHTML = mensagem;
            }`;
        
            let codigoElement = document.getElementById('codigo49');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
        
            Prism.highlightElement(codigoElement);
}

function q50() {
    const userName = document.getElementById('nomeQ50').value;

    if (userName) {
        document.getElementById('output50').textContent = `Olá, ${userName}! Seja bem-vindo!`;
    } else {
        document.getElementById('output50').textContent = 'Por favor, insira seu nome.';
    }
}

function q50Codigo() {
            
                let codigo = `
                function q50() {
                    const userName = document.getElementById('nomeQ50').value;
                
                    if (userName) {
                        document.getElementById('output50').textContent = 'Olá, ' + userName + '! Seja bem-vindo!';
                    } else {
                        document.getElementById('output50').textContent = 'Por favor, insira seu nome.';
                    }
                }`;
            
                let codigoElement = document.getElementById('codigo50');
                codigoElement.innerHTML = '';
                codigoElement.textContent = codigo;
            
                Prism.highlightElement(codigoElement);
}

function q51() {
    document.addEventListener('DOMContentLoaded', function() {
        let users = [];

         window.addNames = function addNames() {
            const input = document.getElementById('nomeQ51').value;
            const names = input.split(',').map(name => name.trim());

            users = users.concat(names);
            displayUsers();
        }

        function displayUsers() {
            const userList = document.getElementById('userListQ51');
            userList.innerHTML = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user;
                userList.appendChild(listItem);
            });
        }

        window.searchName = function searchName() {
            const search = document.getElementById('searchQ51').value.trim().toLowerCase();
            const searchResult = document.getElementById('searchResultQ51');

            const foundUsers = users.filter(user => user.toLowerCase().includes(search));
            if (foundUsers.length > 0) {
                searchResult.textContent = `Nomes encontrados: ${foundUsers.join(', ')}`;
            } else {
                searchResult.textContent = 'Nenhum nome encontrado.';
            }
        }
    });
}

q51();

function q51Codigo() {
        
            let codigo = `
            document.addEventListener('DOMContentLoaded', function() {
                let users = [];
        
                window.addNames = function addNames() {
                    const input = document.getElementById('nomeQ51').value;
                    const names = input.split(',').map(name => name.trim());
        
                    users = users.concat(names);
                    displayUsers();
                }
        
                function displayUsers() {
                    const userList = document.getElementById('userListQ51');
                    userList.innerHTML = '';
                    users.forEach(user => {
                        const listItem = document.createElement('li');
                        listItem.textContent = user;
                        userList.appendChild(listItem);
                    });
                }
        
                window.searchName = function searchName() {
                    const search = document.getElementById('searchQ51').value.trim().toLowerCase();
                    const searchResult = document.getElementById('searchResultQ51');
        
                    const foundUsers = users.filter(user => user.toLowerCase().includes(search));
                    if (foundUsers.length > 0) {
                        searchResult.textContent = 'Nomes encontrados: ' + foundUsers.join(', ');
                    } else {
                        searchResult.textContent = 'Nenhum nome encontrado.';
                    }
                }
            });`;
    
            let codigoElement = document.getElementById('codigo51');
            codigoElement.innerHTML = '';
            codigoElement.textContent = codigo;
    
            Prism.highlightElement(codigoElement);
    
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.question').forEach((element) => {
        element.style.display = 'none';
    });
});