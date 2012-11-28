
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
	if (document.getElementById("result").style.visibility == "hidden") {
		document.getElementById("result").style.visibility = "visible";
	} else {
		document.getElementById("result").style.visibility = "hidden";
}
}

function showCans() {
	if (document.getElementById("garbageCan").style.visibility = "hidden") {
		document.getElementById("garbageCan").style.visibility = "visible";
		document.getElementById("emptyCan").style.visibility = "visible";
		document.getElementById("fullCan").style.visibility = "visible";
		document.getElementById("compostTag").style.visibility = "visible";
	} else {
		document.getElementById("garbageCan").style.visibility = "hidden";
		document.getElementById("emptyCan").style.visibility = "hidden";
		document.getElementById("fullCan").style.visibility = "hidden";
		document.getElementById("compostTag").style.visibility = "hidden";
	}
}