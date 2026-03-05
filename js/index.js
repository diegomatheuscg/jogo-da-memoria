let palavras = ["DIV", "META", "HEADER", "JS", "FOOTER", "BODY", "HTML", "CSS", "NODE"];
let playerName;

const btnReiniciar = document.getElementById("btnReiniciar");
const btnSalvar = document.getElementById("btnSalvar");
const inputPlayer = document.getElementById("inputPlayer");
const cards = document.querySelectorAll(".grid-container button");
const url = "https://darkblue-frog-779608.hostingersite.com";


btnSalvar.addEventListener("click", function() {
	playerName = inputPlayer.value.trim();
	iniciar();
});

function iniciar(){
	embaralhar();
}

function embaralhar() {
	for (let i = palavras.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[palavras[i], palavras[j]] = [palavras[j], palavras[i]];
	}
	cards.forEach((card, index) => {
		card.textContent = palavras[index];
	});
}





let tentativas = 10;

