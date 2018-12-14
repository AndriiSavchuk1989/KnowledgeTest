define(function (require) {
	// Load any app-specific modules
	// with a relative require call,
	// like:
	var registration = require('../registration').regContainer;
	var contacts = require('../contacts').div;
	var test = require('../test').testContainer;
	var home = require('../home').div;
	var aboutJavaScript = require('../about_javascript').div;
	var aboutHTML = require('../about_html').div;
	var aboutCSS = require('../about_css').div;
	var listener = require('../listener').listen;
	// Load library/vendor modules using
	// full IDs, like:
	var content = document.getElementById("content");


	document.getElementsByClassName("navbar")[0].onclick = function (event) {
		event.preventDefault();
		var current = event.target,
			hash = current.hash;
		console.log(hash);


		switch (hash) {
			case "#registration":
				content.innerHTML = "";
				content.style.backgroundColor = "#FFFFFF";
				content.appendChild(registration);
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

		switch (id) {
			case "start_javascript_test":
			case "start_css_test":
			case "start_html_test":
				content.innerHTML = "";
				content.style.backgroundColor = "#8B8B8B";
				content.appendChild(test);
				break;
		}
	});


});