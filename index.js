let incrementOperation = document.getElementById('count').innerText  = 0;
let count = document.getElementById('count');
// Increment Function
function increment(){
    incrementOperation=  incrementOperation + 1;
count.innerText =  incrementOperation;
}
// Decrement Function
function decrement(){
    incrementOperation =  incrementOperation - 1;
 count.innerText =   incrementOperation 
}