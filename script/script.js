let vetor=[];
console.log(vetor)

const CAMPO = "campo";


function adicionar(){
     let valor= getCampo();
     console.log(valor);
     addvetor(valor);
     console.log(vetor)
     imprimir();
     limparCampo();
     setcursor();
     imprimirnatela();
   
    
}

function getCampo(){

   return document.getElementById(CAMPO).value;

}

function addvetor(valor){
   vetor[0] = valor;

}

function imprimir(){
  // document.getElementById("lista").value = vetor [0];
   console.log("chamou o metodo imprimir")
   const lista = document.getElementById("lista");
   lista.innerHTML = vetor[0];
}

function limparCampo(){
   document.getElementById(CAMPO).value = "";
}

function setcursor(){
   document.getElementById(CAMPO).focus();
}

function imprimirnatela(){
     const lista = document.getElementById("lista");
     console.log("=============================")
     console.log("lista")
     console.log("=============================")

}




    
