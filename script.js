
var i=0;
function processForm() {

	i++;
	var listItem = document.myCheckListForm.checklistItem.value;
	var listed = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item' + i + '\')" />' + listItem + '</div>';

	document.getElementById("checkList").innerHTML += listed;
}

function crossedOut(item) {
	document.getElementById(item).className = "checked-off";
}

function sayHello() {
/*	if (document.getElementById("result").style.visibility == "hidden") {
		document.getElementById("result").style.visibility = "visible";
	} else {
		document.getElementById("result").style.visibility = "hidden";
}*/
var test = sqrt(-1);
document.getElementById("result").text(test);
}

var testCounter = 0;
function test() {
	if (testCounter === 0) {
		stage1();
	} else if (testCounter === 1) {
		stage2();
	} else if (testCounter === 2) {
		stage3();
	} else if (testCounter === 3) {
		stage4();
	}
	testCounter++;
}

function stage1() {
	if (document.getElementById("examples").style.visibility = "hidden") {
		document.getElementById("examples").style.visibility = "visible";
	} else {
		document.getElementById("examples").style.visibility = "hidden";
	}
}

function stage2() {
	if (document.getElementById("unk").style.visibility = "hidden") {
		document.getElementById("unk").style.visibility = "visible";
	} else {
		document.getElementById("unk").style.visibility = "hidden";
	}
}

function stage3() {
	if (document.getElementById("nl").style.visibility = "hidden") {
		document.getElementById("nl").style.visibility = "visible";
	} else {
		document.getElementById("nl").style.visibility = "hidden";
	}
}

function stage4() {
	if (document.getElementById("notNum").style.visibility = "hidden") {
		document.getElementById("notNum").style.visibility = "visible";
	} else {
		document.getElementById("notNum").style.visibility = "hidden";
	}
}