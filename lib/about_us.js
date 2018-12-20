define(function () {
	var div = document.createElement("DIV");
	div.id = "about_us_section";
	//var questions = ["1. Who we are?", "2. How many tests we have ?", "3. How much does it cost to get tested on your site ?", "4. Can I get a certificate after completing the test ?"];
	//var answers = ["We are online test service for developers.", "For now we have three tests.", "It's free.", "Unfortunately not, we are still working in test mode."];

	var info = {
		questions: ["Who we are?", "How many tests we have ?", "How much does it cost to get tested on your site ?", "Can I get a certificate after completing the test ?", "You are planning to create new tests ?"],
		answers: ["- We are online test service for developers.", "- For now we have three tests.", "- It's free.", "- Unfortunately not, we are still working in test mode.","- Yes, new tests are under development."]
	};


	var header1 = document.createElement("H1");
	header1.id = "about_us_section_header";
	var headerInnerText = "About us";
	header1.appendChild(document.createTextNode(headerInnerText));

	var article = document.createElement("ARTICLE");
	article.id = "about_us_article";
	
	

	function setQuestions() {
		var l = info.answers.length;
		for (var i = 0; i < l; i++) {
			var questPar = document.createElement("P");
			questPar.className = "question";
			questPar.appendChild(document.createTextNode(info.questions[i]));
			article.appendChild(questPar);
			
			var ansPar = document.createElement("P");
			ansPar.className = "explanation";
			ansPar.appendChild(document.createTextNode(info.answers[i]));
			article.appendChild(ansPar);
		}
		return article;
	}

	div.appendChild(header1);
	div.appendChild(setQuestions());


	//for (var i = 0; i < strings.length; i++) {
	//var questPar = document.createElement("P");
	//questPar.className = "question";
	//questPar.appendChild(document.createTextNode(strings[i][i]));
	//article.appendChild(questPar);
	//for (var j = 0; j < strings[i].length; j++) {
	//var explPar = document.createElement("P");
	//explPar.className = "explanation";
	//}
	//}

	//div.appendChild(header1);
	//div.appendChild(article);

	return {
		div: div
	}

});