const dogs = [
    {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },{
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]

let currentDogIndex = 0
let likeStatusChange = true
render(dogs[currentDogIndex])

function render(dog){
	document.getElementsByClassName("container-main")[0].style.backgroundImage = `url("${dog.avatar}")`
	if (dog.hasBeenLiked) {
		document.getElementById("accept-state-img").src="images/badge-like.png"
		document.getElementsByClassName("accept-state")[0].style.display = "block"
	}
	else if (dog.hasBeenLiked === false && dog.hasBeenSwiped) {
		document.getElementById("accept-state-img").src="images/badge-nope.png"
		document.getElementsByClassName("accept-state")[0].style.display = "block"
	}
}

document.getElementById("dont-like-btn").addEventListener("click",
	() => {
		if (likeStatusChange) {
			dogs[currentDogIndex].hasBeenSwiped = true
			dogs[currentDogIndex].hasBeenLiked = false
			document.getElementById("accept-state-img").src="images/badge-nope.png"
			document.getElementsByClassName("accept-state")[0].style.display = "block"
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
			document.getElementById("accept-state-img").src="images/badge-like.png"
			document.getElementsByClassName("accept-state")[0].style.display = "block"
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

