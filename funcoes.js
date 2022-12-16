function pegaDatas(vetorDeEntrada){
   
   var checaEntrada = verificaEntrada(vetorDeEntrada);
   var formato1 = document.getElementById('flexRadioDefault1');
   var newTextArea = [];
   var resultado = document.getElementById('resultado');
   var j = 0;
   var posicaoDia = 0;
   var posicaoDiaFinal = 0;
   var posicaoMes = 0;
   var posicaoMesFinal = 0;
   var posicao = 0;
   var posicaoFinal = 0;
   var textarea = document.getElementById('textarea').value;
   var cont = 0;
  
   
   if(formato1.checked == true){
   for(var i = 0; i < textarea.length; i++){
    if(textarea[i] == '/'){
      cont++;
    }
    if(cont == 2){
      cont = 0;
      posicaoDia = i-5;
      posicaoDiaFinal = i-3;
      posicaoMes = i-2;
      posicaoMesFinal = i;
      posicao = i+1;
      posicaoFinal = i+5;
      newTextArea[j] =  `'` + textarea.substring(posicao,posicaoFinal) + '-' + textarea.substring(posicaoMes,posicaoMesFinal) + '-' + textarea.substring(posicaoDia,posicaoDiaFinal) + `'` ;
      j++;
    }
    
   }
 } else {
   for(var i = 0; i < textarea.length; i++){
    cont++;
    if(cont == 9){
      cont = 0;
      newTextArea[j] = `'` + textarea[i-2] + textarea[i-1] + '/' + textarea[i-4] + textarea[i-3] + '/' + textarea[i-8] + textarea[i-7] + textarea[i-6] + textarea[i-5] + `'`;
      j++;
      
    }
  }
 }

   resultado.value = "(" + newTextArea + ")";
   }     

   function pegaValores(){
        

        var newTextArea = [];
        var resultado = document.getElementById('resultado');
        var montaPalavra = ' ';
        var textarea = document.getElementById('textarea').value;
        var cont = 0;
        var k = 0;        
        var stringAuxiliar = textarea.split('.').join("");
        var stringAuxiliar3 = stringAuxiliar.split('R').join("");
        var stringAuxiliar4 = stringAuxiliar3.split('$').join("");

        for(var i = 0; i < stringAuxiliar4.length; i++){
          if(stringAuxiliar4[i] == ' '){

          if(cont == 0){
            cont++;
            for(var j = i; stringAuxiliar4[j] != ','; j++){
              montaPalavra = montaPalavra.concat(stringAuxiliar4[j]);
            }
            
            if(stringAuxiliar4[j+1] != '0'){
              montaPalavra = montaPalavra + '.' + stringAuxiliar4[j+1] + stringAuxiliar4[j+2];
            } 
            else if(stringAuxiliar4[j+2] != '0'){
              montaPalavra = montaPalavra + '.' + stringAuxiliar4[j+1] + stringAuxiliar4[j+2];
            }

            newTextArea[k] = montaPalavra.split(' ').join("");
            k++;
            montaPalavra = ' ';

          }


          if(cont == 1){
            cont = 0;
          }

          }
        }
        
        resultado.value = "(" + newTextArea + ")";
 }

  function getDatas(){
     var toDate = document.getElementById('flexRadioDefault2');
     var newTextArea = [];
     var textarea = document.getElementById('textarea').value;
     var resultado = document.getElementById('resultado');
     var cont = 0;
     var j = 0;


     if(toDate.checked == true){

     for( var i = 0; i < textarea.length; i++){
     cont++;
     if(cont == 11){
     newTextArea[j] = 'TO_DATE(' + `'` + textarea.substring(i-11, i) + `'` + ',' + `'` + 'DD/MM/YYYY' + `'` + ')';
     j++;
     cont = 0;
     }

     }

     resultado.value = "(" + newTextArea + ")";
    } else {

    for( var i = 0; i < textarea.length; i++){
     cont++;
     if(cont == 11){
     newTextArea[j] =  `'` + textarea.substring(i-11, i) + `'`;
     j++;
     cont = 0;
     }

     }

     resultado.value = "(" + newTextArea + ")";
   

  }
}


 function redirect(numero){

     if(numero == 1){
     window.location.assign('Valores - definitivo.html');
     }   

     if(numero == 2){
     window.location.assign('DB - definitivo.html');
     }
     if(numero == 3){
     window.location.assign('DA - definitivo.html');
     }


      }


     /* FUNÇÕES DE VALIDAÇÃO */

     function verificaEntrada(vetorDeEntrada){
     var checaEntrada = verificaMascara(vetorDeEntrada);
     if(checaEntrada == 0){
     
     }
     }



     function verificaMascara(vetorDeEntrada){
     var montaPalavra = " ";
     var vetorDeVerificacao = [];
     var j = 0;
     var substrings;
     let novoVetorDeEntrada = vetorDeEntrada.split('/').join("");
    
     for(var i = 0; i < novoVetorDeEntrada.length; i++){    
      montaPalavra = montaPalavra.concat(novoVetorDeEntrada[i]);
      if(novoVetorDeEntrada[i] == ' '){
        console.log("teste");
        vetorDeVerificacao[j] = montaPalavra;
        j++;
        montaPalavra = " ";
      }
     }



     for(i = 0; i < vetorDeVerificacao.length; i++){

     substrings = parseInt(vetorDeVerificacao[i].substring(0,2));
     if(substrings > 0 && substrings <= 31){
      substrings = parseInt(vetorDeVerificacao[i].substring(2,4));
      if(substrings > 0 && substrings <= 12){
      substrings = parseInt(vetorDeVerificacao[i].substring(4,8));
      if(substrings < 2000 && substrings <= 2022){
        return 1;
      } 
      
      else{
        return 0;
      }
      } 
      
      else{
        return 0;
      }
     } 

     else{
       return 0;
     }
     }

   }