let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')



inputBox.addEventListener('keypress', function(elm){
    display.innerText ="you have Pressed " + elm.key
});