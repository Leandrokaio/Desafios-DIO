/*
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/

const nivelDoHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function saldoRanqueada(vitorias, derrotas){
    let resultadoFinal = vitorias - derrotas;
    let mensagemFinal = `O Herói tem de saldo de ${resultadoFinal} está no nível de `
    
    //Condicional usando if else
    // if(resultadoFinal <= 10){
    //     console.log(mensagemFinal + nivelDoHeroi[0]);
    // } else if(resultadoFinal >= 11 && resultadoFinal <= 20){
    //     console.log(mensagemFinal + nivelDoHeroi[1]);
    // } else if(resultadoFinal >= 21 && resultadoFinal <= 50){
    //     console.log(mensagemFinal + nivelDoHeroi[2]);
    // } else if(resultadoFinal >= 51 && resultadoFinal <= 80){
    //     console.log(mensagemFinal + nivelDoHeroi[3]);
    // } else if(resultadoFinal >= 81 && resultadoFinal <= 90){
    //     console.log(mensagemFinal + nivelDoHeroi[4]);
    // } else if(resultadoFinal >= 91 && resultadoFinal <= 100){
    //     console.log(mensagemFinal + nivelDoHeroi[5]);
    // }else {
    //     console.log(mensagemFinal + nivelDoHeroi[6]);
    // }

    //Utilizando Switch Case
    switch(true){
        case(resultadoFinal <= 10):
            console.log(mensagemFinal + nivelDoHeroi[0]);
            break;
        case(resultadoFinal >= 11 && resultadoFinal <= 20):
            console.log(mensagemFinal + nivelDoHeroi[1])
            break;
        case(resultadoFinal >= 21 && resultadoFinal <= 50):
            console.log(mensagemFinal + nivelDoHeroi[2]);
            break;
        case(resultadoFinal >= 51 && resultadoFinal <= 80):
            console.log(mensagemFinal + nivelDoHeroi[3]);
            break;
        case(resultadoFinal >= 81 && resultadoFinal <= 90):
            console.log(mensagemFinal + nivelDoHeroi[4]);
            break;
        case(resultadoFinal >= 91 && resultadoFinal <= 100):
            console.log(mensagemFinal + nivelDoHeroi[5]);
            break;
        case(resultadoFinal >= 101):
            console.log(mensagemFinal + nivelDoHeroi[6]);
            break;
    }

}

saldoRanqueada(5,2);
saldoRanqueada(12,0);
saldoRanqueada(50,0);
saldoRanqueada(55,0);
saldoRanqueada(85,0);
saldoRanqueada(98,0);
saldoRanqueada(105,2);
