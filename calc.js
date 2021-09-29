//Get Number
function number(num){
    let result = document.getElementById('input');
    result.value += num;
}

//Get Result
function result(){
    let result = document.getElementById('input');
    result.value = eval(result.value);
}




//Clear all Result
function clearAll(){
    let result = document.getElementById('input');
    result.value = "";
}
//LastOne Delete
function del(){
    let number = document.getElementById('input');
    let remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
}