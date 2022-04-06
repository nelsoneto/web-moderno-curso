const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
        // this é objeto pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
// com bind é possível passar o objeto que seja resolvido com o this 
falarDePessoa()