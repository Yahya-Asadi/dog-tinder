const dogs = {
	teddy: {
		name: "teddy",
		age: 34,
		image: "images/dog-teddy.jpg",
		likeStatus: undefined,
	},
	rex: {
		name: "rex",
		age: 30,
		image: "images/dog-rex.jpg",
		likeStatus: undefined,
	},
	bella: {
		name: "bella",
		age: 35,
		image: "images/dog-bella.jpg",
		likeStatus: undefined,
	},
}

let dogsArray = ["teddy", "rex", "bella"]
let currentDogIndex = 0
render(dogs[dogsArray[currentDogIndex]])


function like(dog){
	dog.likeStatus = true;
}

function render(dog){
	document.getElementsByClassName("container-main")[0].style.backgroundImage = `url("${dog.image}")`
	if (dog.likeStatus) {
		document.getElementById("accept-state-img").src="images/badge-like.png"
		document.getElementsByClassName("accept-state")[0].style.display = "block"
	}
	else if (dog.likeStatus === false) {
		document.getElementById("accept-state-img").src="images/badge-nope.png"
		document.getElementsByClassName("accept-state")[0].style.display = "block"
	}
}

document.getElementById("dont-like-btn").addEventListener("click", () => {
		dogs[dogsArray[currentDogIndex]].likeStatus = false
		if (currentDogIndex+1 < dogsArray.length){
			currentDogIndex++
			render(dogs[dogsArray[currentDogIndex]])
		}
		else {
			currentDogIndex = 0;
			render(dogs[dogsArray[currentDogIndex]])
		}
	}
)
document.getElementById("you-like-btn").addEventListener("click", () => {
		dogs[dogsArray[currentDogIndex]].likeStatus = true
		if (currentDogIndex+1 < dogsArray.length){
			currentDogIndex++
			render(dogs[dogsArray[currentDogIndex]])
		}
		else {
			currentDogIndex = 0;
			render(dogs[dogsArray[currentDogIndex]])
		}
	}
)
