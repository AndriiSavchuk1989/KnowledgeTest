define(function () {
	var div = document.createElement("DIV");
	div.id = "test_section";


	var header1 = document.createElement("H1");
	header1.id = "test_section_header";
	var headerInnerText = "What is CSS?";
	header1.appendChild(document.createTextNode(headerInnerText));

	var article = document.createElement("ARTICLE");
	article.id = "test_article";

	var articleInnerText = "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.";
	article.appendChild(document.createTextNode(articleInnerText));

	var btn = document.createElement("BUTTON");
	btn.id = "start_css_test";
	btn.className = "css";
	btn.setAttribute("type", "button");
	btn.innerHTML = "Start Test";

	div.appendChild(header1);
	div.appendChild(article);
	div.appendChild(btn);

	return {
		div: div
	}

});