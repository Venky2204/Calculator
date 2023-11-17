function setId(id){
    return document.getElementById(id);
}

var input = setId('input');
var ans = setId('ans');
var body = setId('body');
var preans = setId('preans');
var res = setId('res');

body.addEventListener('keypress',(event)=>{
    if(event.key >= 0 && event.key <=9 || event.key == "+" ||  event.key == '-' || event.key == '*' || event.key == '/' || event.key == '%' || event.key == 'Backspace' || event.key == 'Shift' || event.key == '('|| event.key == ')'){
        input.value += event.key;
        // var res = eval(input.value);
        // preans.textContent = res;
    }else{
        event.preventDefault();
    }
})

function calculate(){
    try{
    var result = eval(input.value);
    preans.textContent = eval(result);
    }
    catch(err){
        console.log(err);
    }
    // input.value = result;
}
function answer(){
    var result = eval(input.value);
    input.value = result;
}

// function myfun(){
//     var res = eval(input.value);
//     preans.textContent = res;
//     console.log("new");
// }

