const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const color = document.querySelector(".color");
const p = document.querySelector("p");

let $i = 36;

const increase = () => {
	$i += 5;
	p.style.fontSize = $i + "px";
};
sizeUp.addEventListener("click", increase);

const decrease = () => {
	$i -= 5;
	p.style.fontSize = $i + "px";
};
sizeDown.addEventListener("click", decrease);

const colorChanger = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	p.style.color = `rgb(${r},${g},${b})`;
};
color.addEventListener("click", colorChanger);
