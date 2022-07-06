$(document).ready(function() {
    let x = ""
    let screen = document.getElementById('screen');

    $(".btn").click(function(){
        if(typeof this.textContent === "string"){
            x += this.textContent;
            screen.innerHTML = x;

            console.log(x);
        }
    });
});