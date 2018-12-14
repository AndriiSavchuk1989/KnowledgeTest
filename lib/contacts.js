define(function () {
	var div = document.createElement("DIV");
	div.className = "contacts";

	var icons = ["img/contacts/map_marker64.png", "img/contacts/letter64.png", "img/contacts/telephone64.png"];

	var iframe = document.createElement("IFRAME");
	iframe.className = "map";
	iframe.setAttribute("src", "https://maps.google.com/maps?q=%D0%B2%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%B0%20%D1%83%D0%BB%20%D0%97%D0%B1%D1%8B%D1%88%D0%BA%D0%BE%2044&t=&z=13&ie=UTF8&iwloc=&output=embed");
	iframe.setAttribute("frameborder", "0");
	iframe.style.border = "0";
	iframe.setAttribute("allowfullscreen", "true");
	iframe.style.width = "900px";
	iframe.style.height = "500px";

	div.appendChild(iframe);
	div.appendChild(setList(icons));


	function setList(arr) {
		var list = document.createElement("UL");
		list.className = "info_list";

		for (var i = 0; i < arr.length; i++) {
			var listItem = document.createElement("LI");
			listItem.className = "info_item";

			var icon = document.createElement("IMG");
			icon.className = "marker";
			icon.src = arr[i];

			var info = document.createElement("SPAN");
			if (i === 0) {
				info.className = "address";
				info.appendChild(document.createTextNode("Vinnitsya Dmytra Mayborodu street 44/12"));
			}
			if (i === 1) {
				info.className = "email";
				info.appendChild(document.createTextNode("andrey.m.savchuk@gmail.com"));
			}
			if (i === 2) {
				info.className = "phone";
				info.appendChild(document.createTextNode("+380982094634"));
			}

			listItem.appendChild(icon);
			listItem.appendChild(info);
			list.appendChild(listItem);

		}
		return list;
	};
	
	return {
		div: div
	}
});