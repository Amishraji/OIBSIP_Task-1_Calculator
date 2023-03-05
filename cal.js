function calculate(val){
    document.getElementById("num").value += val;
    }
    function equal(){
    let x = document.getElementById("num").value ;
    document.getElementById("num").value = eval(x);
    }
    function clear1(){
    document.getElementById("num").value = ""
    }
    function backspace (){
    let x = document.getElementById("num").value ;
    document.getElementById("num").value = x.slice(0,x.length-1)
    
    }