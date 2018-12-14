define(function () {
	var div = document.createElement("DIV");
	div.id = "test_section";


	var header1 = document.createElement("H1");
	header1.id = "about_us_section_header";
	var headerInnerText = "About us";
	header1.appendChild(document.createTextNode(headerInnerText));

	var article = document.createElement("ARTICLE");
	article.id = "about_us_article";

	var articleInnerText = "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.";
	article.appendChild(document.createTextNode(articleInnerText));

	div.appendChild(header1);
	div.appendChild(article);

	return {
		div: div
	}

});