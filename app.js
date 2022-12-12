
const text = document.getElementById('text')

let flag = true

function clearAll(){
    flag = true
    text.innerHTML = "|"
}

function display(expression){
    if (flag) {
        text.innerHTML = ""
        flag = false
    }
    text.innerHTML += expression 
}

function calculate(){
    let ans = eval(text.innerHTML)
    text.innerHTML = ans
}