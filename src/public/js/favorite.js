document.addEventListener("DOMContentLoaded", function () {
	var elements = document.querySelectorAll(".section")

	elements.forEach(function (element) {
		element.addEventListener("click", function () {
			window.location.href = "/quiz-start"
		})
	})
})
