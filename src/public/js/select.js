document.addEventListener("DOMContentLoaded", (event) => {
	const sectionHeads = document.querySelectorAll(".section_head")
	const sliders = document.querySelectorAll(".slider")

	sectionHeads.forEach((sectionHead, index) => {
		sectionHead.addEventListener("click", () => {
			if (sliders[index].style.height === "896px") {
				sliders[index].style.height = "0"
			} else {
				sliders[index].style.height = "896px"
			}
		})
	})
})
