var jogadores = []

function adicionarPlayer(){
    //variavel que pega o nome do jogador novo
    var player = document.querySelector("#player").value;

    //verificar se o valor de palyer não é vazio

    if(player === ''){
        console.log('coloque um valor válido')
    } else{
      
    
    

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

    }
   
    console.log(jogadores);
    
}

function limparPlayer(){
  var player = document.querySelector("#player").value;

  player = '';
}

console.log(jogadores)

function criarTabela(){
    var tbody = document.getElementById('tbody')

    tbody.innerText = ''

    for(let i = 0; i < jogadores.length; i++){
      let tr = tbody.insertRow();

      let td_nome = tr.insertCell();

      let td_pontos = tr.insertCell();

      td_nome.innerText = jogadores[i].nome

      td_pontos.innerText = jogadores[i].pontos
    }
    
}

console.log(jogadores)
