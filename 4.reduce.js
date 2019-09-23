const { obterPessoas } = require('./service');

//implementando o proprio reduce

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
    for (let i = 0; i <= this.length - 1; i++) {
        valorFinal = callback(valorFinal, this[i], this);
    }

    return valorFinal;
}

async function main() {
    try {
        const { results } = await obterPessoas('a');

        const pesos = results.map(item => parseInt(item.height));
        console.log('pesos', pesos);
        // const total = pesos.reduce((anterio, proxiimo) => {
        //     return anterio + proxiimo;
        // }, 0);

        const minhaLista = [
            ['Junior', 'Silva'],
            ['Brasil', 'São Paulo']
        ];

        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo);
        }, [])
            .join(', ');

        console.log('total', total);
    } catch (error) {
        console, log('Deu erro', error)
    }
}
main();