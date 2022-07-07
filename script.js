$(document).ready(function() {
    let x = "";
    let y;
    let resolution;

    let nmb1 = document.getElementById('screen1');
    let op = document.getElementById('screen2');
    let nmb2 = document.getElementById('screen3');
    let res = document.getElementById('screen4');

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

    $(".btn").click(function(){
        if(this.textContent === "+" || this.textContent === "-" || this.textContent === "*" || this.textContent === "/"){
            y = x;
            x = "";
            nmb1.innerHTML = x;
            nmb2.innerHTML = y;
            op.innerHTML = this.textContent;
            return;
        }
        if(this.textContent === "="){
            if(op.innerHTML === "+"){
                resolution = soma(x, y);
                res.innerHTML += resolution;
                return;
            }
            if(op.innerHTML === "-"){
                resolution = subtração(x, y);
                res.innerHTML += resolution;
                return;
            }
            if(op.innerHTML === "*"){
                resolution = multiplicação(x, y);
                res.innerHTML += resolution;
                return;
            }
            if(op.innerHTML === "/"){
                resolution = divisão(x, y);
                res.innerHTML += resolution;
                return;
            }
        }else{
            x += this.textContent;
            x = parseInt(x);
            nmb1.innerHTML = x;
        }
    });

    $(".msc-btn").click(function(){
        if(this.innerHTML === "CLEAR"){
            x = "";
            nmb1.innerHTML = x;
            op.innerHTML = x;
            nmb2.innerHTML = x;
            res.innerHTML = "="
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