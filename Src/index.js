let quantidadeVitorias = 200;
let quantidadeDerrotas = 0;
let saldoJogador = CalcularPontuacao(quantidadeVitorias,quantidadeDerrotas);
let nivelJogador = NivelJogador(saldoJogador);
console.log(`O Heroí tem de saldo de ${saldoJogador} está no nível de ${nivelJogador}`);

function CalcularPontuacao(vitorias,derrotas) {
    let rankJogador = vitorias - derrotas;
    return rankJogador;
}

function NivelJogador(rank) {
    let nivel = '';
    switch (true) {
        case (rank <= 10):{
            nivel = "Ferro";
            break;
        }
        case (rank > 10 && rank <= 20) :{
            nivel = "Bronze";
            break;
        }
        case (rank > 20 && rank <= 50) :{
            nivel = "Prata";
            break;
        }
        case (rank > 50 && rank <= 80) :{
            nivel = "Ouro";
            break;
        }
        case (rank > 80 && rank <= 90) :{
            nivel = "Diamante";
            break;
        }
        case (rank > 90 && rank <= 100) :{
            nivel = "Lendário";
            break;
        }
        default: {
            nivel = "Imortal";
            break;
        }
    }
    return nivel;
}

