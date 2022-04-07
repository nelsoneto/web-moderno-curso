function Pessoa() { // inicio
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
} // fim do contexto léxico 

new Pessoa