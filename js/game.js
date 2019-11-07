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


            this.clearObstacles()
            if (this.framesCounter % 70 === 0) this.generateObstacles()
            if (this.framesCounter % 100 === 0) this.score++;
            if (this.isCollision()) this.gameOver()
            if (this.framesCounter > 3000) this.framesCounter = 0;
        }, 1000 / this.fps)
    },


    reset: function () {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, 50, 150, './images/my-fairis (1).png', this.width, this.height, this.playerKeys);
        this.obstacles = [];
        ScoreBoard.init(this.ctx, this.score)
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.width, this.height)

    },

    drawAll: function () {
        this.background.draw(this.framesCounter);
        this.player.draw(this.framesCounter);
        this.obstacles.forEach(obstacle => obstacle.draw())
        ScoreBoard.draw(this.score)
    },

    moveAll: function () {
        this.background.move()
        this.player.move()
        this.obstacles.forEach(obstacle => obstacle.move())

    },

    generateObstacles: function () {
        this.obstacles.push(new Obstacle(this.ctx, 60, 60, this.width, Math.floor(Math.random() * (800 - 200) + 200)))
    },

    gameOver: function () {
        clearInterval(this.interval)
    },


    isCollision: function () {
        return this.obstacles.some(obs => (this.player.posX + 20 > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + 95 > obs.posY && obs.posY + obs.height > this.player.posY))
    },


    clearObstacles: function () {
        this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= 0))
    }

}