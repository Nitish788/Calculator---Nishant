const outputE1 = document.querySelector(".output-1");
const outputE2 = document.querySelector(".output-2");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear");
console.log(equal);
let out1Num = "";
let out2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
number.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        out2Num += e.target.innerText;
        outputE2.innerText = out2Num;
    });
});
operator.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (!out2Num) return;
        haveDot = false;
        const operatorName = e.target.innerText;
        if (out1Num && out2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(out2Num);
        }
        clearVar(operatorName);
        lastOperation = operatorName;
        console.log(result);
    });
});

function clearVar(name = "") {
    out1Num += out2Num + "" + name + "";
    outputE1.innerText = out1Num;
    outputE2.innerText = "";
    out2Num = "";
}

function mathOperation() {
    switch (lastOperation) {
        case "*":
            result = parseFloat(result) * parseFloat(out2Num);
            break;
        case "+":
            result = parseFloat(result) + parseFloat(out2Num);
            break;
        case "-":
            result = parseFloat(result) - parseFloat(out2Num);
            break;
        case "/":
            result = parseFloat(result) / parseFloat(out2Num);
            break;
        case "%":
            result = parseFloat(result) % parseFloat(out2Num);
            break;
    }
}
equal.addEventListener("click", () => {
    if (!out2Num || !out1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    outputE2.innerText = result;
    out2Num = result;
    out1Num = "";
});
clearAll.addEventListener("click", () => {
    out1Num = "";
    out2Num = "";
    outputE1.innerText = "";
    outputE2.innerText = "";
    result = "";
});