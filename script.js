$(document).ready(function() {
    let x = 0;
    let y;
    let resolution;

    let nmb1 = document.getElementById('screen1');
    nmb1.innerHTML = x;
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
    function clear(nmb1, op, nmb2, x){
        x = 0;
        nmb1.innerHTML = x;
        op.innerHTML = "";
        nmb2.innerHTML = "";
        return x;
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
        if(this.textContent === "="){
            if(op.innerHTML === "+"){
                resolution = soma(x, y);
                res.innerHTML = resolution;
                x = clear(nmb1, op, nmb2, x, res);
                return;
            }
            if(op.innerHTML === "-"){
                resolution = subtração(x, y);
                res.innerHTML = resolution;
                x = clear(nmb1, op, nmb2, x, res);
                return;
            }
            if(op.innerHTML === "*"){
                resolution = multiplicação(x, y);
                res.innerHTML = resolution;
                x = clear(nmb1, op, nmb2, x, res);
                return;
            }
            if(op.innerHTML === "/"){
                resolution = divisão(x, y);
                res.innerHTML = resolution;
                x = clear(nmb1, op, nmb2, x, res);
                return;
            }
        }else{
            x += this.textContent;
            x = parseFloat(x);
            nmb1.innerHTML = x;
        }
    });

    $(".msc-btn").click(function(){
        if(this.innerHTML === "CLEAR"){
            x = clear(nmb1, op, nmb2, x, res);
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