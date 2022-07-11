$(document).ready(function() {
    /* Variaveis de operação */
    let x = 0;
    let y;
    let resolution = 0;

    /* Variaveis de HTML */
    let nmb1 = document.getElementById('screen1');
    nmb1.innerHTML = x;
    let op = document.getElementById('screen2');
    let nmb2 = document.getElementById('screen3');
    let res = document.getElementById('screen4');

    /* Funções de operações */
    function soma(x, y){
        return x + y;
    }
    function subtração(x, y){
        return x - y;
    }
    function multiplicação(x, y){
        return x * y;
    }
    function divisão(x, y){
        return x / y;
    }

    /* Comandos */
    $(".btn").click(function(){
        if(this.textContent === "+"){
            if(y !== undefined){
                resolution = soma(resolution,x);
                res.innerHTML = "="+resolution;
                nmb2.innerHTML = "";
                x = 0;
                nmb1.innerHTML = x;
                return;
            }
            y = x;
            x = 0;
            nmb1.innerHTML = x;
            nmb2.innerHTML = y;
            op.innerHTML = this.textContent;
            return;
        }
        if(this.textContent === "-"){
            if(y !== undefined){
                resolution = soma(resolution,x);
                res.innerHTML = "="+resolution;
                nmb2.innerHTML = "";
                x = 0;
                nmb1.innerHTML = x;
                return;
            }
            y = x;
            x = 0;
            nmb1.innerHTML = x;
            nmb2.innerHTML = y;
            op.innerHTML = this.textContent;
            return;
        }
        if(this.textContent === "*"){
            if(y !== undefined){
                resolution = multiplicação(resolution,x);
                res.innerHTML = "="+resolution;
                nmb2.innerHTML = "";
                x = 0;
                nmb1.innerHTML = x;
                return;
            }
            y = x;
            x = 0;
            nmb1.innerHTML = x;
            nmb2.innerHTML = y;
            op.innerHTML = this.textContent;
            return;
        }
        if(this.textContent === "/"){
            if(y !== undefined){
                resolution = divisão(resolution,x);
                res.innerHTML = "="+resolution;
                nmb2.innerHTML = "";
                x = 0;
                nmb1.innerHTML = x;
                return;
            }
            y = x;
            x = 0;
            nmb1.innerHTML = x;
            nmb2.innerHTML = y;
            op.innerHTML = this.textContent;
            return;
        }
        /* Decimal */
        if(this.textContent === "."){
            let test = !!x.match|(/^[.]/);
            if (test === 0){
                x = x.toString();
                x += ".";
                nmb1.innerHTML = x;
                return;
            }
            return;
        }
        /* Operação única */
        if(this.textContent === "="){
            if(op.innerHTML === "+"){
                resolution = soma(x, y);
                res.innerHTML = "="+resolution;
                x = 0;
                y = undefined;
                nmb1.innerHTML = x;
                op.innerHTML = "";
                nmb2.innerHTML = "";
                return;
            }
            if(op.innerHTML === "-"){
                resolution = subtração(x, y);
                res.innerHTML = "="+resolution;
                x = 0;
                y = undefined;
                nmb1.innerHTML = x;
                op.innerHTML = "";
                nmb2.innerHTML = "";
                return;
            }
            if(op.innerHTML === "*"){
                resolution = multiplicação(x, y);
                res.innerHTML = "="+resolution;
                x = 0;
                y = undefined;
                nmb1.innerHTML = x;
                op.innerHTML = "";
                nmb2.innerHTML = "";
                return;
            }
            if(op.innerHTML === "/"){
                resolution = divisão(y, x);
                res.innerHTML = "="+resolution;
                x = 0;
                y = undefined;
                nmb1.innerHTML = x;
                op.innerHTML = "";
                nmb2.innerHTML = "";
                return;
            }
        }else{
            x += this.textContent;
            x = parseFloat(x);
            nmb1.innerHTML = x;
        }
    });

    /* Botões especiais */
    $(".msc-btn").click(function(){
        if(this.innerHTML === "CLEAR"){
            x = 0;
            y = undefined;
            resolution = 0;
            nmb1.innerHTML = x;
            op.innerHTML = "";
            nmb2.innerHTML = "";
            res.innerHTML = "=";
        }
        if(this.textContent === "ERASE"){
            x = x.toString();
            lastI = x.indexOf(" ");
            x = x.substring(0, x.length - 1);
            x = parseInt(x);
            nmb1.innerHTML = x;
        }
    });
});