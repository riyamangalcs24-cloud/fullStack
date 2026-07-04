const playground = document.querySelector('#playground');
const keyInput = document.querySelector("#keyInput");
const status = document.querySelector('#status');

playground.addEventListener('mousemove', (e) => {
    status.textContent = `mouse Position X : ${e.clientX} , Y: ${e.clientY}`;
});

keyInput.addEventListener('keydown',(e) => {
    console.log(`user typed ${e.key} (Total Value : ${e.target.value})`)
})