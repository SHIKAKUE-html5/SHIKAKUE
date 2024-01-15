document.addEventListener("DOMContentLoaded", function () {
	var elements = document.querySelectorAll(".title")

	elements.forEach(function (element) {
		element.addEventListener("click", function () {
			window.location.href = "/quiz-start"
		})
	})
})
