let comparaComThis = function (param) {
    console.log(this === param);
};

comparaComThis(global); //retorna true no node, no browser seria false

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); //retorna false porque global agora é obj;
comparaComThis(obj); //retorna true 

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);