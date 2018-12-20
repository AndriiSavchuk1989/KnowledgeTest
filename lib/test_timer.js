define(function () {
	var time = 300;



	function timer() {
		var m = document.getElementById("minutes");
		var d = document.getElementById("timer_dots");
		var s = document.getElementById("seconds");
		var min, sec;

		min = parseInt(time / 60, 10);
		sec = parseInt(time % 60, 10);

		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;

		m.textContent = min;
		s.textContent = sec;

		--time;
		if (time < 0) {
			alert("finish");
		}

	};

	return {
		time: time,
		timer: timer
	}

});