/*
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

let nomeDoHeroi = "Meliodas"; // Nome do Personagem
let nivelDeXp = 0; // Nível de XP que inicialmente começará por 0
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"] // Array que contém os níveis de cada valor de XP 
let mensagem = `O Herói de nome ${nomeDoHeroi} está no nível de ` // Mensagem no final de cada operação

//Desafio feito com for

for(let i = 0; i <= 10 ; i ++ ){ //Automatização das operações com base no laço for
    nivelDeXp += 1000;
    
    console.log(`O Herói bebeu uma porção de XP e aumentou para ${nivelDeXp} XP`) // Mensagem antes da operação para ver o nível que o personagem está e fazer possíveis correções no código
    
    if(nivelDeXp <= 1000){
        console.log(mensagem + nivel[0])
    }else if (nivelDeXp >= 1001 && nivelDeXp <= 2000 ){
        console.log(mensagem + nivel[1])
        }else if (nivelDeXp >= 2001 && nivelDeXp <= 5000){
            console.log(mensagem + nivel[2])
        }else if (nivelDeXp >= 5001 && nivelDeXp <= 7000){
            console.log(mensagem + nivel[3])
        }else if(nivelDeXp >= 7001 && nivelDeXp <= 8000){
            console.log(mensagem + nivel[4])
        }else if(nivelDeXp >= 8001 && nivelDeXp <= 9000){
            console.log(mensagem + nivel[5])
        }else if(nivelDeXp >= 9001 && nivelDeXp <= 10000){
            console.log(mensagem + nivel[6])
        }else{
            console.log(mensagem + nivel[7])
        }
   
}


//Desafio feito com Switch

for(let n = 0; n <= 10; n++){
    nivelDeXp += 1000;
    
    console.log(`O Herói bebeu uma porção de XP e aumentou para ${nivelDeXp} XP`)
    
    switch(true){
        case(nivelDeXp <= 1000):
            console.log(mensagem + nivel[0]);
            break
        case(nivelDeXp >= 1001 && nivelDeXp <= 2000):
            console.log(mensagem + nivel[1]);
            break
        case(nivelDeXp >= 2001 && nivelDeXp <= 5000):
            console.log(mensagem + nivel[2]);
            break
        case(nivelDeXp >= 5001 && nivelDeXp <= 7000):
            console.log(mensagem + nivel[3]);
            break
        case(nivelDeXp >= 7001 && nivelDeXp <= 8000):
            console.log(mensagem + nivel[4])
            break
        case(nivelDeXp >= 8001 && nivelDeXp <= 9000):
            console.log(mensagem + nivel[5]);
            break
        case(nivelDeXp >= 9001 && nivelDeXp <= 10000):
            console.log(mensagem + nivel[6]);
            break
        case(nivelDeXp > 10000):
            console.log(mensagem + nivel[7]);
            break
    }
}
