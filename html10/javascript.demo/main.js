console.log("hello world")

let a = 2;
let b = 3;

let c = a + b;

let myName = "ppp"

console.log(c);
console.log(myName)

for(let i=0; 1 < 100; i++) {
    console.log(i);
}

// store a reference to myButton in JavaScript
let myButton = document.getElementById("myButton")

// add an event listener that listens for when the user clicks on the button

myButton.addEventListener("click", function(){
    console.log("button was clicked")

    let myCircle = document.getElementById("myCircle")

    myCircle.style.backgroundColor = "oranged";
}) 