const status = document.querySelector(".progress_bar")
const active = document.querySelector(".inner_bar")
const statusText = document.querySelector(".status-text")

let value = sessionStorage.getItem("correctAnswer")
if (value === null) {
	value = 0
} else {
	value = parseInt(value)
}

active.style.width = (value * 100) / 30 + "%"
statusText.innerText = value + "問"
