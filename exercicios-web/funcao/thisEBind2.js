/* Essa função não vai funcionar porque porque o this.idade++
não está apontando para objeto pessoa */
// function Pessoa() {
//     this.idade = 0;
//     setInterval(function(){
//         this.idade++; 
//         console.log(this.idade);
//     }, 1000);
// };

// new Pessoa;

/*Para funcionar, é preciso instanciar o this do bjeto Pessoa() para uma variavel qualquer neste caso self e substituir o this de dentro de setInterval()*/

function Pessoa() {
    this.idade = 0;

    const self = this; // recebendo this.idade = 0
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
};

new Pessoa;

// assim funciona tbm
// function Pessoa() {
//     this.idade = 0

//     setInterval(() => {
//         this.idade++
//         console.log(this.idade)
//     }, 1000)
// }

// new Pessoa