const { obterPessoas } = require('./service');

/*
explicação do { obterPessoas }:

const item = {
    nome: "Junior",
    idade: 19
}

const { nome } = item;
console.log(nome) ==== Junior;

or two people

const { nome, idade } = item;
console.log(nome, idade) ==== Junior, 19;
*/

//criando o proprio array.filter

Array.prototype.meuFilter = function (callback) {
    const lista = []
    for (index in this) {
        const item = this[index];
        const result = callback(item, index, this);
        if (!result) continue;
        lista.push(item);
    }
    return lista
}

async function main() {
    try {
        const { results } = await obterPessoas('a');

        // const familiaLayers = results.filter((item) => {
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1;
        //     return result
        // })

        //usando nosso array.filter criado
        const familiaLayers = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}, lista${lista.length}`);
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLayers.map((pessoa) => pessoa.name);
        console.log('names', names);
    } catch (error) {
        console.error('Deu ruim', error);

    }
}
main()