var flag = 0;

function limpa(){
    //documento atual + nome do form + nome do input de dados + value para obter o valor
    document.form1.visor.value = "";
}

function valor(v){
    if(flag == 1){
        if(v == '/' || v == '*' || v == '-' || v == '+'){
            var atual = document.form1.visor.value;
            document.form1.visor.value = atual + v;
            flag = 0;
        }else{
            limpa();
            flag = 0;
            var atual = document.form1.visor.value;
            document.form1.visor.value = atual + v;
        }
    }else{
        var atual = document.form1.visor.value;
        document.form1.visor.value = atual + v;
    }
    
}

function calcula(){
    var resultado = eval(document.form1.visor.value);
    document.form1.visor.value = resultado;
    flag = 1;
}