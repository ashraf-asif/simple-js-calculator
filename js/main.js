// *calculator
// input field
const answer = document.querySelector("#enter");
// input field

// buttons
function input1() {
	answer.value += "1";
}

function input2() {
	answer.value += "2";
}

function input3() {
	answer.value += "3";
}

function input4() {
	answer.value += "4";
}

function input5() {
	answer.value += "5";
}

function input6() {
	answer.value += "6";
}

function input7() {
	answer.value += "7";
}

function input8() {
	answer.value += "8";
}

function input9() {
	answer.value += "9";
}

function input0() {
	answer.value += "0";
}

function inputDot() {
	answer.value += ".";
}

function openingBracket() {
  answer.value += "(";
}

function closingBracket() {
  answer.value += ")";
}

function inputAdd() {
	answer.value += "+";
}

function inputSubstract() {
	answer.value += "-";
}

function inputMultiple() {
	answer.value += "*";
}

function inputDivide() {
	answer.value += "/";
}

function clearInput() {
	answer.value = "";
}

function checkResult() {
	answer.value = eval(answer.value);
}
// buttons
// *calculator

