define(function () {
	var clicked = 0;
	var testContainer = document.createElement("DIV");
	testContainer.id = "test_container";
	testContainer.style.width = "500px";
	testContainer.style.height = "300px";
	testContainer.style.border = "1px solid black";

	var answersList = document.createElement("DIV");
	answersList.className = "answersList";

	for (var i = 0; i < 6; i++) {

		if (i === 0) {
			var question = document.createElement("P");
			question.id = "question";
			question.appendChild(document.createTextNode("Question"));
			testContainer.appendChild(question);
		}

		if (i === 1 || i === 2 || i === 3 || i === 4) {
			var answer = document.createElement("P");
			answer.className = "answer";
			answer.appendChild(document.createTextNode("Answer"));
			answersList.appendChild(answer);
		}
	}

	testContainer.appendChild(answersList);

	testContainer.addEventListener("click", function (event) {
		if (clicked === 5){
			clicked = 0;
			alert("finish");
		}
		var curr = event.target;
		var val = curr.textContent;
		var className = curr.className;
		
		if (className === "answer"){
			++clicked;
			console.log(clicked);
		}
	});

	return {
		testContainer: testContainer
	}
});