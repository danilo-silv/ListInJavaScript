const service = require('./service');

//fazendo o propio array.map()
Array.prototype.meuArray = function (callback) {
    const novoArrayMapeado = [];

    for (let i = 0; i <= this.length - 1; i++) {
        const resultado = callback(this[i], i);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}

async function main() {
    try {

        const result = await service.obterPessoas('a');
        // const names = [];
        // console.time('forEach');
        // result.results.forEach(item => {
        //     names.push(item.name);
        // });
        // console.timeEnd('forEach');

        // console.time('map');
        // const names = result.results.map((personagem) => personagem.name);
        // console.timeEnd('map');
        console.time('meuArray');
        const names = result.results.meuArray(function (pessoa, indice) {
            return pessoa.name;
        });
        console.timeEnd('meuArray');
        console.log('Nomes', names);
    } catch (error) {
        console.error('Deu ruim', error);
    }
}

main();