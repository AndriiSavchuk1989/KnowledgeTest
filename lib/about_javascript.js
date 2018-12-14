define(function () {
	var div = document.createElement("DIV");
	div.id = "test_section";
	
	
	var header1 = document.createElement("H1");
	header1.id = "test_section_header";
	var headerInnerText = "What is JavaScript?";
	header1.appendChild(document.createTextNode(headerInnerText));
	
	var article = document.createElement("ARTICLE");
	article.id = "test_article";
	
	var articleInnerText = "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour.";
	article.appendChild(document.createTextNode(articleInnerText));
	
	var btn = document.createElement("BUTTON");
	btn.id = "start_javascript_test";
	btn.className = "javascript";
	btn.setAttribute("type", "button");
	btn.innerHTML = "Start Test";
	
	div.appendChild(header1);
	div.appendChild(article);
	div.appendChild(btn);
	
	return {
		div: div
	}
	
});