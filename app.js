function getNumber(num) {
    console.log(num)
    let number = document.getElementById("result")
    number.value += num;
}

function clearRes() {
    let number = document.getElementById("result")
    number.value = ""
}

function getRes() {
    let number = document.getElementById("result")
    number.value = eval(number.value);
}