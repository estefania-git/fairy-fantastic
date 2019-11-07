window.onload = function () {
    document.querySelector("#start-button").onclick = function () {
        document.querySelector('#game-board').style.display = 'none'

        Game.init();
    };
}