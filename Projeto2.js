var prompt  = require(`prompt-sync`)();

const itens = [`PEDRA`, `PAPEL`, `TESOURA`];

contador = 1;

while (contador){
   
    let rodadas = +prompt('Quantas vezes vamos jogar? ');
    console.log();

    countRodadas = 1;
    userPoints = 0;
    computerPoints = 0;
    while ( countRodadas <= rodadas){
        
        console.log(`Rodada ${countRodadas}`);

        const user = (prompt(`Qual você escolhe? `)).trim().toUpperCase();
        console.log();

        if (itens.indexOf(user) == -1){ 
           console.log(`Opção inválida`);
           continue;
        } else {
            console.log(`Você escolheu: ${user}`);
        }

        let computer = itens[Math.floor(Math.random() * 3)];
       
        console.log(`Escolha do PC: ${computer} \n`);

        if (user == computer){
            console.log('Ninguém pontuou.');

        } else if (user == `PEDRA`){
            if (computer == `TESOURA`){
                console.log('Ponto pra você!');
                userPoints = userPoints + 1;
            } else {
                console.log('Ponto para o PC.');
                computerPoints =computerPoints + 1;
            }
        } else if (user == `PAPEL`){
            if (computer == `PEDRA`){
                console.log(`Ponto pra você!`);
                userPoints = userPoints + 1;
            } else {
                console.log(`Ponto para o PC.`);
                computerPoints =computerPoints + 1;
            }
        } else if (user == `TESOURA`){
            if (computer == `PAPEL`){
                console.log(`Ponto pra você!`);
                userPoints = userPoints + 1;
            } else {
                console.log(`Ponto para o PC.`);
                computerPoints =computerPoints + 1;
            }
        }
        countRodadas = countRodadas + 1;
    }

    console.log(`Seus pontos foram: ${userPoints} pts`);
    console.log(`Pontos do PC: ${computerPoints} pts`);

    if (userPoints >computerPoints){
        console.log(`Resultado: você ganhou!`);
    } else if (userPoints <computerPoints){
        console.log(`Resultado: você perdeu.`);
    } else if (userPoints ==computerPoints){
        console.log(`Empatou!`);
    }
    
    let contador = prompt(`Quer jogar de novo?`).trim().toUpperCase();
    if (contador == `NÃO` || contador == `NAO` ){
        console.log('Fim de jogo.');
        break;
    } else if (contador != `SIM`){
        console.log(`Opção errada. Jogo encerrado.`);
        break;
    } 

}
