define(function () {
	var div = document.createElement("DIV");
	div.id = "test_section";


	var header1 = document.createElement("H1");
	header1.id = "test_section_header";
	var headerInnerText = "What is HTML?";
	header1.appendChild(document.createTextNode(headerInnerText));

	var article = document.createElement("ARTICLE");
	article.id = "test_article";

	var articleInnerText = "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.HTML documents imply a structure of nested HTML elements. These are indicated in the document by HTML tags, enclosed in angle brackets thus: <p>.In the simple, general case, the extent of an element is indicated by a pair of tags: a 'start tag' <p> and 'end tag' </p>. The text content of the element, if any, is placed between these tags.Tags may also enclose further tag markup between the start and end, including a mixture of tags and text. This indicates further (nested) elements, as children of the parent element.The start tag may also include attributes within the tag. These indicate other information, such as identifiers for sections within the document, identifiers used to bind style information to the presentation of the document, and for some tags such as the <img> used to embed images, the reference to the image resource.Some elements, such as the line break <br>, do not permit any embedded content, either text or further tags. These require only a single empty tag (akin to a start tag) and do not use an end tag.Many tags, particularly the closing end tag for the very commonly used paragraph element <p>, are optional. An HTML browser or other agent can infer the closure for the end of an element from the context and the structural rules defined by the HTML standard. These rules are complex and not widely understood by most HTML coders.The general form of an HTML element is therefore: <tag attribute1='value1' attribute2='value2'>''content''</tag>. Some HTML elements are defined as empty elements and take the form <tag attribute1='value1' attribute2='value2'>. Empty elements may enclose no content, for instance, the <br> tag or the inline <img> tag. The name of an HTML element is the name used in the tags. Note that the end tag's name is preceded by a slash character, /, and that in empty elements the end tag is neither required nor allowed. If attributes are not mentioned, default values are used in each case.";
	article.appendChild(document.createTextNode(articleInnerText));

	var btn = document.createElement("BUTTON");
	btn.id = "start_html_test";
	btn.className = "html";
	btn.setAttribute("type", "button");
	btn.innerHTML = "Start Test";

	div.appendChild(header1);
	div.appendChild(article);
	div.appendChild(btn);

	return {
		div: div
	}

});