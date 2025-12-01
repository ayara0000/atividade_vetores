let vetor=[];
console.log(vetor)

function adicionar(){
     let valor= getCampo();
     console.log(valor);
     addvetor(valor);
     console.log(vetor)
     imprimir();
   
    
}

function getCampo(){
   return document.getElementById("campo").value;

}

function addvetor(valor){
   vetor[0] = valor;

}

function imprimir(){
   document.getElementById("lista").value = vetor [0];
   const lista = document.getElementById("lista");
   lista.innerHTML = vetor[0];
}






    
