var jogadores = []

function adicionarPlayer(){
    //variavel que pega o nome do jogador novo
    var player = document.querySelector("#player").value;

    //verificar se o valor de player não é vazio

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
///função de limpar o input 
function limparPlayer(){
  var player = document.querySelector("#player").value;

  player = '';
}

console.log(jogadores)

// função inserir os dados na tabela
function criarTabela(){
    var tbody = document.getElementById('tbody')

    tbody.innerText = ''

    for(let i = 0; i < jogadores.length; i++){
      let tr = tbody.insertRow(); //insert.Row = insere linha na tabela

      let td_nome = tr.insertCell();  //insertCell = insere dados na linha

      let td_pontos = tr.insertCell();

      td_nome.innerText = jogadores[i].nome

      td_pontos.innerText = jogadores[i].pontos
    }
    
}

console.log(jogadores)
