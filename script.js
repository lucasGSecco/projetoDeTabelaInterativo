//lista para armazenar os jogadores
var jogadores = []

function adicionarPlayer(){
    //variavel que pega o nome do jogador novo
    var player = document.querySelector("#player").value;

    //console.log(player);

    //classe para criar novos jogadores
    class players {
        nome;
        pontos = 0;


        constructor(nome, pontos){
            this.nome = nome
            this.pontos = pontos
        }
    }
    
    
    var playerT = new players(player,0);

    
    playerT.nome = player;

    jogadores.push(playerT);
    
    console.log(jogadores);
    
}

console.log(jogadores)



