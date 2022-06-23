let incrementOperation = document.getElementById('count').innerText = 0;
let count = document.getElementById('count');
let para = document.getElementById('para-id');
// Increment Function
function increment() {
    incrementOperation += 1;
    count.innerText = incrementOperation;
}
// Decrement Function
function decrement() {
    incrementOperation -= 1;
    count.innerText = incrementOperation;
}
//Save function
function save() {
    let paraString = incrementOperation + " - "
    para.textContent += paraString;
}