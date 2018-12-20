define(function () {

	function createTable() {
		var arr = JSON.parse(localStorage.getItem("tests"));
		if (!arr) {
			return false;
		}
		var len = arr.length + 1;
		var table = document.createElement("TABLE");
		table.id = "users_rating";

		for (var i = 0; i < len; i++) {

			var tr = document.createElement("TR");
			tr.className = "users_rating_table_row";

			if (i === 0) {
				tr.className = "users_rating_table_row_header";

				for (var j = 0; j <= arr.length; j++) {
					var th = document.createElement("TH");
					th.className = "users_rating_table_header";

					switch (j) {
						case 0:
							th.appendChild(document.createTextNode("ID"));
							tr.appendChild(th);
							break;
						case 1:
							th.appendChild(document.createTextNode("HTML"));
							tr.appendChild(th);
							break;
						case 2:
							th.appendChild(document.createTextNode("CSS"));
							tr.appendChild(th);
							break;
						case 3:
							th.appendChild(document.createTextNode("Javascript"));
							tr.appendChild(th);
							break;
					}

				}
				table.appendChild(tr);
			}

			if (i > 0) {
				for (var k = 0; k <= arr.length; k++) {
					var td = document.createElement("TD");
					td.className = "users_rating_data_cell";
					tr.appendChild(td);
				}
				table.appendChild(tr);
			}
		}
		return table;
	};

	function fillTable() {
		var arr = JSON.parse(localStorage.getItem("tests"));
		var table = document.getElementById("users_rating");
		var rows = document.getElementsByClassName("users_rating_table_row");
		var counter = 0;

		for (var i = 0; i < rows.length; i++) {
			for (var key in arr[i]) {
				rows[i].cells[counter].innerHTML = arr[i][key];
				if (counter < 3) {
					++counter;
				} else {
					counter = 0;
				}
			}
		}
	};
	fillTable();

	return {
		createTable: createTable,
		fillTable: fillTable
	}
});