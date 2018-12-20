define(function () {

	var autorContainer = document.createElement("DIV");
	autorContainer.id = "authorisation_container";

	var autorForm = document.createElement("FORM");
	autorForm.id = "autor_form";

	var labelForName = document.createElement("LABEL");
	labelForName.id = "autor_name_label";
	labelForName.appendChild(document.createTextNode("Name"));
	var inputName = document.createElement("INPUT");
	inputName.id = "autor_name_input";
	inputName.name = "name";
	inputName.setAttribute("type", "text");

	var labelForSurname = document.createElement("LABEL");
	labelForSurname.id = "autor_surname_label";
	labelForSurname.appendChild(document.createTextNode("Surname"));
	var inputSurname = document.createElement("INPUT");
	inputSurname.id = "autor_surname_input";
	inputSurname.name = "surname";
	inputSurname.setAttribute("type", "text");

	var labelForEmail = document.createElement("LABEL");
	labelForEmail.id = "autor_email_label";
	labelForEmail.appendChild(document.createTextNode("Email"));
	var inputEmail = document.createElement("INPUT");
	inputEmail.id = "autor_email_input";
	inputEmail.name = "email";
	inputEmail.setAttribute("type", "email");

	var autorButton = document.createElement("INPUT");
	autorButton.setAttribute("type", "button");
	autorButton.id = "autorButton";
	autorButton.value = "Sign in";

	autorForm.appendChild(labelForName);
	autorForm.appendChild(inputName);

	autorForm.appendChild(labelForSurname);
	autorForm.appendChild(inputSurname);

	autorForm.appendChild(labelForEmail);
	autorForm.appendChild(inputEmail);

	autorForm.appendChild(autorButton);

	autorContainer.appendChild(autorForm);

	//sign in

	autorButton.addEventListener("click", function (event) {
		var reg, saved;
		var isValid = true;
		var obj = {};
		var element = event.target;

		if (inputName.value.length == 0) {
			isValid = false;
		}

		if (inputSurname.value.length == 0) {
			isValid = false;
		}

		if (inputEmail.value.length == 0) {
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault();
			alert("Все поля должны быть заполнены");
		}
		obj.name = inputName.value;
		obj.surname = inputSurname.value;
		obj.email = inputEmail.value;
		isEqual(obj);
		//clear();
	});

	function isEqual(obj) {
		var users = JSON.parse(window.localStorage.getItem("users"));
		for (var i = 0; i < users.length; i++) {
			if (JSON.stringify(obj) == JSON.stringify(users[i])) {
				alert("welcome " + users[i].name);
				window.sessionStorage.setItem("email", obj.email);
				break;
			}
		}
	};

	// sign in

	return {
		autorContainer: autorContainer,
		isEqual: isEqual
	}
});