class Obstacle {
    constructor(ctx, width, height, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.imageObstacle = new Image()
        this.imageObstacle.src = "./images/my-fairis (1).png"
        this.posX = gameWidth;
        this.posY = gameHeight * 98 - this.height;

        this.vx = 10;
    }


    draw() {
        
    }

    move() {
        this.posX -= this.vx;
    }
}