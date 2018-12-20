define(function (require) {
	// Load any app-specific modules
	// with a relative require call,
	// like:
	var registration = require('../registration').regContainer;
	var contacts = require('../contacts').div;
	var authorisation = require('../authorisation').autorContainer;
	var leaders = require('../leaders').createTable;
	var fillTable = require("../leaders").fillTable;

	var testTimer = require('../test_timer').timer;
	var testTime = require('../test_timer').time;

	var test = require('../test').testContainer;
	var fillTestSheet = require("../test").fillTestSheet;
	var clear = require('../test').clear;
	var afterTestPage = require('../after_test_page').div;
	var clicked = require('../test').clicked;
	var aboutUs = require('../about_us').div;

	var home = require('../home').div;
	var runningDots = require('../home').runningDots;
	var aboutJavaScript = require('../about_javascript').div;
	var aboutHTML = require('../about_html').div;
	var aboutCSS = require('../about_css').div;
	var listener = require('../listener').listen;
	var anchors = [];

	var getTest = require('../getTest').getTest;
	var interval, time, testSummary = 0;
	// Load library/vendor modules using
	// full IDs, like:
	var content = document.getElementById("content");


	document.getElementsByClassName("navbar")[0].onclick = function (event) {
		event.preventDefault();
		var current = event.target,
			hash = current.hash;

		if (hash === "#home") {
			interval = setInterval(runningDots, 2000);
		} else {
			clearInterval(interval);
		}

		if (!hash) {
			return;
		} else {
			anchors.push(hash);
		}

		console.log(hash);
		console.log(anchors);
		switch (hash) {
			case "#leaders":
				if (!localStorage.getItem("tests")) {
					alert("Our database is empty");
				} else {
					content.innerHTML = "";
					content.style.backgroundColor = "#FFFFFF";
					var table = leaders();
					content.appendChild(table);
					fillTable();
				}
				break;
			case "#about_us":
				content.innerHTML = "";
				content.style.backgroundColor = "#FFFFFF";
				content.appendChild(aboutUs);
				break;
			case "#registration":
				content.innerHTML = "";
				content.style.backgroundColor = "#FFFFFF";
				content.style.justifyContent = "center";
				content.appendChild(registration);
				break;
			case "#authorisation":
				content.innerHTML = "";
				content.style.backgroundColor = "#FFFFFF";
				content.appendChild(authorisation);
				break;
			case "#contacts":
				content.style.justifyContent = "center";
				content.innerHTML = "";
				content.style.backgroundColor = "#8B8B8B";
				content.appendChild(contacts);
				break;
			case "#home":
				content.innerHTML = "";
				content.style.backgroundColor = "#FFFFFF";
				content.appendChild(home);
				break;
			case "#html":
				content.innerHTML = "";
				content.style.backgroundColor = "#8B8B8B";
				content.appendChild(aboutHTML);
				break;
			case "#css":
				content.innerHTML = "";
				content.style.backgroundColor = "#8B8B8B";
				content.appendChild(aboutCSS);
				break;
			case "#javascript":
				content.innerHTML = "";
				content.style.backgroundColor = "#8B8B8B";
				content.appendChild(aboutJavaScript);
				break;
		}
	};

	content.addEventListener("click", function (event) {
		var elem = event.target;
		var id = elem.id;
		var tests = getTest(anchors[anchors.length - 1].substring(1));
		//start testing
		switch (id) {
			case "start_javascript_test":
			case "start_css_test":
			case "start_html_test":
				if (sessionStorage.length === 0) {
					alert("Please login first");
					content.innerHTML = "";
					content.style.backgroundColor = "#FFFFFF";
					content.appendChild(authorisation);
				} else {
					content.innerHTML = "";
					time = setInterval(testTimer, 1000);
					content.style.backgroundColor = "#8B8B8B";
					content.appendChild(test);
					fillTestSheet(tests, clicked);
				}
				break;
			case "answerButton1":
			case "answerButton2":
			case "answerButton3":
			case "answerButton4":

				var userAnswer = event.target.innerText;
				var correctAnswer = tests[clicked][tests.length];

				//compare userAnswer with correctAnswer
				if (tests[clicked].indexOf(userAnswer) === correctAnswer) {
					++testSummary;
				}
				//compare userAnswer with correctAnswer

				if (clicked === tests.length - 1) {
					var statistic = [];
					clearInterval(time);
					//push users with results to localStorage
					if (!localStorage.getItem("tests")) {

						var activeUser = {};
						activeUser.email = sessionStorage.getItem("email");
						activeUser[anchors[anchors.length - 1].substring(1)] = testSummary;
						statistic.push(activeUser);
						localStorage.setItem("tests", JSON.stringify(statistic));
					} else {
						var testsArr = JSON.parse(localStorage.getItem("tests"));
						var index = -1;

						for (var i = 0; i < testsArr.length; i++) {

							for (var key in testsArr[i]) {
								if (testsArr[i][key] === sessionStorage.getItem("email")) {
									index = i;
								}
							}
						}

						if (index > -1) {
							var temp = testsArr[index];
							temp[anchors[anchors.length - 1].substring(1)] = testSummary;
							testsArr.splice(index, 1);
							testsArr.push(temp);
							localStorage.removeItem("tests");
							localStorage.setItem("tests", JSON.stringify(testsArr));
						} else if (index === -1) {
							var activeUser = {};
							activeUser.email = sessionStorage.getItem("email");
							activeUser[anchors[anchors.length - 1].substring(1)] = testSummary;
							testsArr.push(activeUser);
							localStorage.removeItem("tests");
							localStorage.setItem("tests", JSON.stringify(testsArr));
						}


					}
					//push users with results to localStorage
					testSummary = 0;
					clear();
					clicked = 0;
					content.innerHTML = "";
					content.style.backgroundColor = "red";
					content.appendChild(afterTestPage);
				} else {
					++clicked;
					clear();
					content.appendChild(test);
					fillTestSheet(tests, clicked);
				}
				break;
			case "regButton":
				content.innerHTML = "";
				content.style.backgroundColor = "#FFFFFF";
				content.appendChild(authorisation);
		}
		console.log(clicked);
		console.log(tests);
	}, true);

});