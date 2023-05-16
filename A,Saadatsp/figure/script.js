let red = document.getElementById('red');
let item = document.getElementById('item');
let blue = document.getElementById('blue');
let orange = document.getElementById('orange');

red.onclick = function(){
    if(item.classList.contains("blue")){
        item.classList.replace("blue","red");
    }
    else if(item.classList.contains("orange")){
        item.classList.replace("orange","red")
    }
    else{
       item.classList.add("red") 
    }
}


blue.onclick = function(){
    if(item.classList.contains("red")){
        item.classList.replace("red","blue");
    }
    else if(item.classList.contains("orange")){
        item.classList.replace("orange","blue")
    }
    else{
        item.classList.add("blue")
    }
}

orange.onclick = function(){
    if(item.classList.contains("blue")){
        item.classList.replace("blue","orange");
    }
    else if(item.classList.contains("red")){
        item.classList.replace("red","blue")
    }
    else{
        item.classList.add("orange")
    }
}





