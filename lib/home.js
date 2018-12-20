define(function () {
	//create container for slider
	var div = document.createElement("DIV");
	div.className = "slider_container";

	//define variables for slider function
	var counter = 0;
	var list = fillList();



	//append container for rout node width id="content"
	div.appendChild(list);

	function runningDots() {
		var dots = document.getElementsByClassName("slider_dot");
		var background = ["img/sliders/css3.jpg", "img/sliders/html_5.jpg", "img/sliders/javascript.jpg"];
		var i = 0;
		if (counter > 0) {
			for (; i < counter; i++) {
				dots[i].style.backgroundColor = "transparent";
				dots[i].style.borderColor = "#FFFFFF";
			}
			if (counter == dots.length) {
				for (var i = 0; i < dots.length; i++) {
					dots[i].style.backgroundColor = "transparent";
					dots[i].style.borderColor = "#FFFFFF";
				}
				counter = 0;
			}
		}
		dots[counter].style.backgroundColor = "#27AD60";
		dots[counter].style.borderColor = "#27AD60";
		div.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.9))" + "," + "url" + "(" + background[counter] + ")";


		counter++;

	};

	//var interval = setInterval(runningDots, 2000);


	// fill dots list for slider
	function fillList() {
		var list = document.createElement("UL");
		list.className = "slider_dots";
		var i = 0,
			l = 3;

		for (; i < l; i++) {
			var listItem = document.createElement("LI");
			listItem.className = "slider_dot";
			list.appendChild(listItem);
		}

		return list;
	}

	return {
		div: div,
		//interval: interval
		runningDots: runningDots
	}

});