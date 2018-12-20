define(function () {
	var div = document.createElement("DIV");
	div.id = "test_result";


	var header1 = document.createElement("H1");
	header1.id = "test_result_header";
	var headerInnerText = "Thank you for pass test";
	header1.appendChild(document.createTextNode(headerInnerText));

	var result = document.createElement("P");
	result.id = "test_result_info";

	var resultInnerText = "Congratulations";
	result.appendChild(document.createTextNode(resultInnerText));



	div.appendChild(header1);
	div.appendChild(result);

	return {
		div: div
	}

});