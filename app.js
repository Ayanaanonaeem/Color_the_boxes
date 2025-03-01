var sub = document.getElementById("sub")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")

one.addEventListener('mouseenter',function(){
    sub.style.backgroundColor="rgb(255, 0, 221)";
    document.body.style.backgroundColor="rgb(5, 38, 228)"
})
two.addEventListener('mouseenter',function(){
    sub.style.backgroundColor="rgb(5, 38, 228)";
    document.body.style.backgroundColor="rgb(247, 1, 1)"
})
three.addEventListener('mouseenter',function(){
    sub.style.backgroundColor="rgb(247, 1, 1)";
    document.body.style.backgroundColor="rgb(255, 0, 221)"

    
})
