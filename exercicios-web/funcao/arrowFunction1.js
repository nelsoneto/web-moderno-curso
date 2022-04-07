
let dobro = function (a) {
    return 2 * a;
};

/* arrow function tem o this no contesto dela, o this não varia, lembrando que arrow function é uma função anonima */
dobro = (a) => {
    return 2 * a;
};

dobro = a => 2 * a; // return implícito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
};

ola = () => 'Olá';
ola = _ => 'Olá'; // possui um param
console.log(ola());

teste = _ => (2 * 2) / 2;
console.log(teste());