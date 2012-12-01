var testCounter = 1;
function test() {
	switch (testCounter++) {
		case 1:
			turnOn("examples");
			break;
		case 2:
			turnOn("unk");
			break;
		case 3:
			turnOn("nl");
			break;
		case 4:
			turnOn("notNum");
			break;
		case 5:
			turnOn("unkExample");
			break;
		case 6:
			stage5();
			break;
		case 7:
			turnOn("nlExample");
			break;
		case 8:
			stage6();
			break;
		case 9:
			turnOn("NaNExample");
			break;
		case 10:
			stage7();
			break;
		default:
			resetPage();
			break;
	}
}

function turnOn(onText) {
	document.getElementById(onText).style.visibility = "visible";
}

function stage5() {
	var testObject = {};
	console.log(testObject.moo);
}

function stage6() {
	console.log(document.getElementById('asdfasdfasdf'));
}

function stage7() {
	console.log(Math.sqrt(-1));
}

function resetPage() {
	document.location.reload(true);
	testCounter = 1;
}