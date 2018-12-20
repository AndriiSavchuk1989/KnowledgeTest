define(function () {

	function getTest(file) {
		switch (file) {
			case "home":
			case "about_us":
			case "contacts":
			case "registration":
			case "authorisation":
				return false;
				break;
		}
		var xhr = new XMLHttpRequest(),
			data,
			arr = [],
			str = file + ".json";

		xhr.onreadystatechange = function () {
			if (xhr.status == 200 && xhr.readyState == 4) {
				data = xhr.responseText;
			}
		}

		// 2. Конфигурируем его: GET-запрос на URL 'data.json'
		xhr.open('GET', '../tests/' + str, false);

		// 3. Отсылаем запрос
		xhr.send();

		// 4. Если код ответа сервера не 200, то это ошибка
		if (xhr.status != 200) {
			// обработать ошибку
			alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
		} else {
			// вывести результат
			data = xhr.responseText; // responseText -- текст ответа.
		}
		arr = JSON.parse(data);
		return arr;
	};

	return {
		getTest: getTest
	}
});