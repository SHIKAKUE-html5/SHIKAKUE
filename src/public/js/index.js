document.addEventListener("DOMContentLoaded", (event) => {
	function isNumber(value) {
		return !isNaN(value) && value !== null && value !== ""
	}

	let goal = sessionStorage.getItem("goal")
	if (goal === null) {
		for (let i = 0; i < Infinity; i++) {
			goal = prompt("1日の目標問数を入力してください。")
			if (isNumber(goal)) {
				sessionStorage.setItem("goal", goal)
				break
			} else {
				alert("数値だけ入力してください！")
			}
		}
	}

	const active = document.querySelector(".inner_bar")
	const statusText = document.querySelector(".status-text")
	const goalNum = document.querySelector(".goal-num")
	goalNum.innerText = goal
	let value = sessionStorage.getItem("correctAnswer")
	if (value === null) {
		value = 0
	} else {
		value = parseInt(value)
	}

	if (value >= goal) {
		active.style.width = "100%"
		statusText.innerText = "目標達成"
		statusText.style.color = "#3D8D00"
		active.style.borderRadius = "40px"
		active.style.backgroundColor = "#3DED39"
	} else {
		active.style.width = (value * 100) / goal + "%"
		statusText.innerText = value + "問"
	}
})
