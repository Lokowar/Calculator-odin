$(document).ready(function() {
    let x = "";
    let screenOp = document.getElementById('screen1');
    let screenRes = document.getElementById('screen2');
    let msc = document.getElementsByClassName("msc-btn");

    $(".btn").click(function(){
        if(typeof this.textContent === "string"){
            x += this.textContent;
            x = parseInt(x);
            screenOp.innerHTML = x;
        }
        if(this.textContent === "+"){
            x += this.textContent;
            screenOp.innerHTML = x;
        }
    });

    $(".msc-btn").click(function(){
        if(this.innerHTML === "CLEAR"){
            x = "";
            screenOp.innerHTML = x;
        }
        if(this.textContent === "ERASE"){
            x = x.toString();
            lastI = x.indexOf(" ");
            x = x.substring(0, x.length - 1);
            screenOp.innerHTML = x;
        }
    });
});