const teddy = {
	name: "teddy",
	age: 34,
	image: "images/dog-teddy.jpg",
	likeStatus: undefined,
}

document.getElementsByClassName("container-main")[0].style.backgroundImage = `url("${teddy.image}")`
document.getElementById("you-like-btn").addEventListener("click", () => {
	document.getElementById("accept-state-img").src="images/badge-like.png"
	document.getElementsByClassName("accept-state")[0].style.display = "block"
}
)
document.getElementById("dont-like-btn").addEventListener("click", () => {
	document.getElementById("accept-state-img").src="images/badge-nope.png"
	document.getElementsByClassName("accept-state")[0].style.display = "block"
}
)
