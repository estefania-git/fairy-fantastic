const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {
        TOP_KEY: 38

    },
    score: 0,




    init: function () {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.start();
    },


    start: function () {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++;

            this.clear();
            this.drawAll();
            this.moveAll();


        }, 1000 / this.fps)
    },


    reset: function () {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, 50, 150, '../images/my-fairis (1).png', this.width, this.height, this.playerKeys);
        ScoreBoard.init(this.ctx, this.score)
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height)

    },

    drawAll: function () {
        this.background.draw();
        this.player.draw(this.framesCounter);
        ScoreBoard.draw(this.score)
    },

    moveAll: function () {
        this.background.move()
        this.player.move()

    }

}