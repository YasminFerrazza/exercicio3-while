let numero = parseInt(prompt('Digite um número inteiro e positivo e te mostrarei a contagem até o mesmo'));
let contador = 1;
let msg ="Contagem";


if(isNaN(numero)||numero<=0){
    alert("Este número não é válido");
}

else {
    while (contador <= numero){
       msg = msg + ' ' + contador;
        contador++
    }
    msg = msg + ' Acabou!';
    alert(msg);
}
