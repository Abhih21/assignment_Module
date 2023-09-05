const decrementbtn = document.getElementById("decrementBtn");

const incrementbtn = document.getElementById("incrementBtn");

const resetbtn = document.getElementById("resetBtn");

const countvalue = document.getElementById("countvalue");


//for decrement button.

decrementbtn.addEventListener("click", () =>{
    const value = Number(countvalue.innerText);
    if (value > 0){
        countvalue.innerText = value -1;
    } else {
        alert("Negative value not allowed");

    }
    
});

//for increment button.

incrementbtn.addEventListener("click", () =>{
    const value = Number(countvalue.innerText);
    if (value >= 10){
        alert("10+ value are not allowed")
    } else{
        countvalue.innerText = value+1;
    }
});

// for reset button

resetbtn.addEventListener("click" , () =>{
    countvalue.innerText = 0;
});