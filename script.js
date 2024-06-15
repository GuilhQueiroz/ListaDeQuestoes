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

function toggleCodigo() {  
    let codigoElement = document.getElementById('codigo2');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo3');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo4');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo5');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo6');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo7');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo8');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo9');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo10');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo11');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo12');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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
}

function toggleCodigo() {
    let codigoElement = document.getElementById('codigo13');
    if (codigoVisivel) {
        codigoElement.style.display = 'none';
    } else {
        codigoElement.style.display = 'block';
    }
    codigoVisivel = !codigoVisivel;
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

}

function q23() {

}

function q24() {

}

function q25() {

}

function q26() {

}

function q27() {

}

function q28() {

}

function q29() {

}

function q30() {

}

function q31() {

}

function q32() {

}

function q33() {

}

function q34() {

}

function q35() {

}

function q36() {

}

function q37() {

}

function q38() {

}

function q39() {

}

function q40() {

}

function q41() {

}

function q42() {

}

function q43() {

}

function q44() {

}

function q45() {

}

function q46() {

}

function q47() {

}

function q48() {

}

function q49() {

}

function q50() {

}

function q510() {

}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.question').forEach((element) => {
        element.style.display = 'none';
    });
});