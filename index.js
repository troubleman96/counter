let count = 0;

document.getElementById("decreasebtn").onclick = function(){
    count-=1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("increasebtn").onclick = function(){
    count+=1;
    document.getElementById("counter").innerHTML = count;
}

































