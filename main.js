const numeroSenha = document.querySelector('.parametro-senha__texto'); 
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const Botoes=document.querySelectorAll('.parametro-senha__botoes');

Botoes[0].onclick=diminuiTamanho;
Botoes[1].onclick=aumentaTamanho;

function diminuiTamanho(){
   if(tamanhoSenha > 1){

    //tamanhoSenha = tamanhoSenha-1;
    tamanhoSenha--;
   }
   numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
 //tamanhoSenha = tamanhoSenha+1;
tamanhoSenha++;

    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(Botoes);