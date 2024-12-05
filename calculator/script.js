let currentInput = "";
let operation = null;
let previousInput = "";

function appendValue(value) {
    currentInput += value;
    updateResult(currentInput);
}

function performOperation(op) {
    if (currentInput) {
        operation = op;
        previousInput = currentInput;
        currentInput = "";
    }
}

function calculateResult() {
    if (previousInput && currentInput && operation) {
        const result = eval(`${previousInput} ${operation} ${currentInput}`);
        updateResult(result);
        currentInput = result.toString();
        previousInput = "";
        operation = null;
    }
}

function clearResult() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateResult("");
}

function updateResult(value) {
    document.getElementById("result").value = value;
}
