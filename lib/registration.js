define(function () {

	var regContainer = document.createElement("DIV");
	regContainer.className = "registration_container";

	var registrationForm = document.createElement("FORM");
	registrationForm.className = "form";

	var labelForName = document.createElement("LABEL");
	labelForName.className = "label";
	labelForName.appendChild(document.createTextNode("Name"));
	var inputName = document.createElement("INPUT");
	inputName.className = "input";
	inputName.name = "name";
	inputName.setAttribute("type", "text");

	var labelForSurname = document.createElement("LABEL");
	labelForSurname.className = "label";
	labelForSurname.appendChild(document.createTextNode("Surname"));
	var inputSurname = document.createElement("INPUT");
	inputSurname.className = "input";
	inputSurname.name = "surname";
	inputSurname.setAttribute("type", "text");

	var labelForEmail = document.createElement("LABEL");
	labelForEmail.className = "label";
	labelForEmail.appendChild(document.createTextNode("Email"));
	var inputEmail = document.createElement("INPUT");
	inputEmail.className = "input";
	inputEmail.name = "email";
	inputEmail.setAttribute("type", "email");

	var regButton = document.createElement("INPUT");
	regButton.setAttribute("type", "button");
	regButton.className = "inputButton";
	regButton.value = "Registration";

	registrationForm.appendChild(labelForName);
	registrationForm.appendChild(inputName);

	registrationForm.appendChild(labelForSurname);
	registrationForm.appendChild(inputSurname);

	registrationForm.appendChild(labelForEmail);
	registrationForm.appendChild(inputEmail);

	registrationForm.appendChild(regButton);

	regContainer.appendChild(registrationForm);

	return {
		regContainer: regContainer
	}
});