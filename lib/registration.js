define(function () {

	var regContainer = document.createElement("DIV");
	regContainer.id = "registration_container";

	var registrationForm = document.createElement("FORM");
	registrationForm.id = "reg_form";

	var labelForName = document.createElement("LABEL");
	labelForName.id = "reg_name_label";
	labelForName.appendChild(document.createTextNode("Name"));
	var inputName = document.createElement("INPUT");
	inputName.id = "reg_name_input";
	inputName.name = "name";
	inputName.setAttribute("type", "text");

	var labelForSurname = document.createElement("LABEL");
	labelForSurname.id = "reg_surname_label";
	labelForSurname.appendChild(document.createTextNode("Surname"));
	var inputSurname = document.createElement("INPUT");
	inputSurname.id = "reg_surname_input";
	inputSurname.name = "surname";
	inputSurname.setAttribute("type", "text");

	var labelForEmail = document.createElement("LABEL");
	labelForEmail.id = "reg_email_label";
	labelForEmail.appendChild(document.createTextNode("Email"));
	var inputEmail = document.createElement("INPUT");
	inputEmail.id = "reg_email_input";
	inputEmail.name = "email";
	inputEmail.setAttribute("type", "email");

	var regButton = document.createElement("INPUT");
	regButton.setAttribute("type", "button");
	regButton.id = "regButton";
	regButton.value = "Registration";

	registrationForm.appendChild(labelForName);
	registrationForm.appendChild(inputName);

	registrationForm.appendChild(labelForSurname);
	registrationForm.appendChild(inputSurname);

	registrationForm.appendChild(labelForEmail);
	registrationForm.appendChild(inputEmail);

	registrationForm.appendChild(regButton);

	regContainer.appendChild(registrationForm);
	
	var users = [];


	//registration 
	regButton.addEventListener("click", userRegistration);

	function userRegistration() {
		var reg, saved;
		var isValid = true;
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
		} else {
			saved = JSON.parse(window.localStorage.getItem("users"));
			if (saved === null) {
				var user = new User();
				user.name = inputName.value;
				user.surname = inputSurname.value;
				user.email = inputEmail.value;
				users.push(user);
				var reg = JSON.stringify(users);
				window.localStorage.setItem("users", reg);
			}
			if (saved) {
				var user = new User();
				user.name = inputName.value;
				user.surname = inputSurname.value;
				user.email = inputEmail.value;
				saved = JSON.parse(window.localStorage.getItem("users"));
				saved.push(user);
				var reg = JSON.stringify(saved);
				window.localStorage.setItem("users", reg);
				console.log(saved.length);
			}
		}
	};
	return {
		regContainer: regContainer
	}
});