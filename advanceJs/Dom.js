const greeting = document.querySelector("#greeting");
const nameInput = document.querySelector('#nameInput');
const colorBox = document.querySelector("#colorBox");
const greenBtn = document.querySelector("#greenBtn");

greenBtn.addEventListener('click',() => {
    const name = nameInput.value.trim() || 'Guest';
    greeting.textContent = `Hello, ${name}!`;
    colorBox.style.backgroundColor = 'teal';
})