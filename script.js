function adicionarPlayer(){
    //variavel que pega o nome do jogador novo
    var player = document.querySelector("#player").value;

    //console.log(player);

    //classe para criar novos jogadores
    class players {
        nome;
        pontos = 0;
    }
    
    var playerT = new players;

    constructor(nome, pontos){
        this.nome = nome
        this.pontos = pontos
    }
    
    playerT.nome = player;
    
    console.log(playerT);
    
}


