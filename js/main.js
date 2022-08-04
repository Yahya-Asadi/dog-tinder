import  dogs from "/js/data.js"
let currentDogIndex = 0
let likeStatusChange = true
render(dogs[currentDogIndex])

function render(dog){
	document.getElementsByClassName("container-main")[0]
				.style.backgroundImage = `url("${dog.avatar}")`
	if (dog.hasBeenLiked) {
		document.getElementById("accept-state-img")
					.src="images/badge-like.png"
		document.getElementsByClassName("accept-state")[0]
					.style.display = "block"
	}
	else if (dog.hasBeenLiked === false && dog.hasBeenSwiped) {
		document.getElementById("accept-state-img")
					.src="images/badge-nope.png"
		document.getElementsByClassName("accept-state")[0]
					.style.display = "block"
	}
	else {
		document.getElementById("accept-state-img")
					.src=""
		document.getElementsByClassName("accept-state")[0]
					.style.display = "none"
	}
}

document.getElementById("dont-like-btn").addEventListener("click",
	() => {
		if (likeStatusChange) {
			dogs[currentDogIndex].hasBeenSwiped = true
			dogs[currentDogIndex].hasBeenLiked = false
			document.getElementById("accept-state-img")
						.src="images/badge-nope.png"
			document.getElementsByClassName("accept-state")[0]
						.style.display = "block"
			likeStatusChange = false
			setTimeout(
				() => {
					likeStatusChange = true
					if (currentDogIndex+1 < dogs.length){
						console.log("here")
						currentDogIndex++
						render(dogs[currentDogIndex])
					}
					else {
						currentDogIndex = 0;
						render(dogs[currentDogIndex])
					}
				},
				6000
			)
		}
	}
)
document.getElementById("you-like-btn").addEventListener("click",
	() => {
		if (likeStatusChange) {
			dogs[currentDogIndex].hasBeenSwiped = true
			dogs[currentDogIndex].hasBeenLiked = true
			document.getElementById("accept-state-img")
						.src="images/badge-like.png"
			document.getElementsByClassName("accept-state")[0]
						.style.display = "block"
			likeStatusChange = false
			setTimeout(
				() =>{
					likeStatusChange = true
					if (currentDogIndex+1 < dogs.length){
						currentDogIndex++
						render(dogs[currentDogIndex])
					}
					else {
						currentDogIndex = 0;
						render(dogs[currentDogIndex])
					}
				}, 
				6000
			)
		}
	}
)

