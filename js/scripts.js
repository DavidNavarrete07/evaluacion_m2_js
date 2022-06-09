const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
let random_word = "";
let time = 10;
let score = 0;
setInterval(addToDOM());
let timeInterval = setInterval(updateTime, 1000);
const input_word = document.querySelector("#inputWord");
// función para devolver una palabra aleatoria dentro del arreglo words[]
function randomWords() {
    random_word = words[Math.floor(Math.random() * words.length)];
    return random_word;
}
// función para agregar al DOM la palabra aleatoria
function addToDOM() {
    const etiq_h1_random = document.querySelector("#randomWord");
    etiq_h1_random.textContent = randomWords();
}
// función para ir actualizando el tiempo de juego
function updateTime() {
    const etiq_time = document.querySelector("#timeSpan");
    time--;
    if (time === 0) {
        clearInterval(timeInterval);
        input_word.setAttribute('disabled', true);
        gameOver();
    }else if(time <= 5){
        etiq_time.style["color"] = "red";
    }else{
        etiq_time.style["color"] = "white";
    }
    etiq_time.textContent = `${time} segundo(s)`;
}
// función para actualizar el score
function updateScore() {
    score++;
    const etiq_score = document.querySelector("#score");
    etiq_score.textContent = score;
}
// función para cuando el jugador pierde
function gameOver() {
    const etiq_end_game = document.querySelector("#end-game-container");
    document.querySelector('.main').remove();
    let container = document.createElement('div');
    container.innerHTML =
        `<div class="main card mb-3 w-100">
            <div class="row g-0">
                <div class="col-12">
                    <div class="card-body">
                        <h2 class="card-title py-2">⌨️ TYPER 3000 ⌨️</h2>
                        <h1 class="fw-bold text-danger text-uppercase">Se te ha acabado el tiempo</h1>
                        <p class="fw-bold">Tu puntuación final fue de: ${score} punto(s)</p>
                        <button onclick="location.reload();" class="btn btn-dark fw-bold text-uppercase">Volver a empezar</button>
                    </div>
                </div>
            </div>
        </div>`;
    etiq_end_game.appendChild(container);
}
//Evento para capturar cuando se presione la tecla Enter
input_word.addEventListener('keydown', function (e) {
    const entered_word = input_word.value;
    if (e.key === "Enter" || e.keyCode === 13) {
        if (entered_word === random_word) {
            time = time + 3;
            input_word.value = "";
            addToDOM();
            updateScore();
        } else {
            addToDOM();
            input_word.value = "";
        }
    }
});