var count1 = 0;
var count2 = 0;
var gameOver = false;
var winningScore = 5;
var h1 = document.querySelector("h1");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var button1 = document.querySelector("#p1");
var button2 = document.querySelector("#p2");
var button3 = document.querySelector("#rst");
var numInput = document.querySelector("input[type='number']");
var winningLimit = document.querySelector("p span")


button1.addEventListener("click",function() {
	if(!gameOver) {
		count1++;
		if(winningScore === count1) {
		gameOver = true;
		player1.classList.add("winner");
		}
		player1.textContent = count1; 
	}
});




button2.addEventListener("click",function() {
	if(!gameOver){
		count2++;
		if(winningScore === count2) {
			gameOver = true;
			player2.classList.add("winner");
		}
		player2.textContent = count2; 
	}
});

function reset() {
	count2 = count1 = 0
	gameOver = false
	player1.textContent = player2.textContent = "0";
	player1.classList.remove("winner");
	player2.classList.remove("winner");
}

button3.addEventListener("click",function () {
	reset();
});

numInput.addEventListener("change",function () {
	winningLimit.textContent = " " + this.value;
	winningScore = Number(this.value);
	reset();

});