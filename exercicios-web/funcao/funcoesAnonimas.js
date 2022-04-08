// função anônima é uma função sem nome, simplesmente isso.
// ***uma arrow function sempre sera anônima***
const soma = function (x, y) {
    return x + y;
};

// o parâmetro operacao por padrão se não passar nada, assume a função acima
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
});
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
    falar: function /*Não precisa na nova versão do JS "falar: function" */ () {
        console.log('Opa')
    }
};

pessoa.falar();

// nova versão não precisa de dois pontos e escrever function como o exemplo de cima.
const pessoa1 = {
    falar1(){ 
        console.log('Opa1');
    }
};
pessoa1.falar1();
