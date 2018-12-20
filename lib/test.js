define(function () {
	var clicked = 0;

	var testWrapper = document.createElement("DIV");
	testWrapper.id = "testWrapper";


	var testContainer = document.createElement("DIV");
	testContainer.id = "test_container";
	testContainer.style.width = "500px";
	testContainer.style.height = "300px";
	testContainer.style.border = "1px solid black";

	var timerContainer = document.createElement("DIV");
	timerContainer.id = "time_keeper";

	var countDown = document.createElement("DIV");
	countDown.id = "timer";

	var minutes = document.createElement("SPAN");
	minutes.id = "minutes";
	minutes.appendChild(document.createTextNode("5"));

	var seconds = document.createElement("SPAN");
	seconds.id = "seconds";
	minutes.appendChild(document.createTextNode("00"));

	var dots = document.createElement("SPAN");
	dots.id = "timer_dots";
	dots.appendChild(document.createTextNode(":"));


	countDown.appendChild(seconds);
	countDown.insertBefore(dots, seconds);
	countDown.insertBefore(minutes, dots);
	timerContainer.appendChild(countDown);
	testWrapper.appendChild(timerContainer);


	var answersList = document.createElement("DIV");
	answersList.id = "answersList";

	for (var i = 0; i < 6; i++) {

		if (i === 0) {
			var question = document.createElement("P");
			question.id = "question";
			testContainer.appendChild(question);
		}

		if (i === 1 || i === 2 || i === 3 || i === 4) {
			var answer = document.createElement("P");
			answer.className = "answer";
			answer.id = "answerButton" + i;
			answersList.appendChild(answer);
		}
	}

	testContainer.appendChild(answersList);
	testWrapper.appendChild(testContainer);

	function fillTestSheet(quests, clicked) {
		if (clicked < quests.length) {
			var test = document.getElementById("test_container");
			var question = document.getElementById("question");
			var answers = document.getElementsByClassName("answer");
			var i = 0;
			var ans = quests[clicked];
			var counter = 1;
			question.appendChild(document.createTextNode(ans[i]));
			clicked++;
			for (; i < ans.length - 2; i++) {
				answers[i].appendChild(document.createTextNode(ans[counter]));
				counter++;
			}
		} else {
			clicked = 0;
			return false;
		}

	};

	function clear() {
		var pars = document.querySelectorAll("p");

		for (var i = 0; i < pars.length; i++) {
			pars[i].innerHTML = "";
		}
	};

	return {
		testContainer: testWrapper,
		fillTestSheet: fillTestSheet,
		clicked: clicked,
		clear: clear
	}
});