const tela = document.getElementsByTagName('body')[0];
const game = new Game();

tela.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
       (game.isPause())?game.start():game.pause('Pause');
    }else if (event.key == 'p') {
        game.pause();
    }
})

function Game() {
    const painel = document.getElementById('painel');
    const placar = document.getElementById('placar');
    const painelMsg = painel.querySelector('.msg');
    let pause = true;
    this.isPause = () => pause;
    this.start = () => {
        painel.style.display = 'none';
        placar.style.display = 'flex';
        pause = false;
    };

    this.pause = (mensagem) => {
        painel.style.display = 'block';
        painelMsg.textContent = mensagem;
        pause = true;
    };
}