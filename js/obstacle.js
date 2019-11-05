class Obstacle {
    constructor(ctx, width, height, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image()
        this.image.src = "./images/example (1).png"
        this.posX = gameWidth;
        // this.posY = gameHeight * 98 - this.height;


        this.posY = gameHeight * 1 - this.height;
        this.posY0 = gameHeight * 1 - this.height;

        this.frames = 5;
        this.framesIndex = 0;

        this.vx = 5;
    }


    draw(framesCounter) {
        this.ctx.drawImage(
            //this.image, this.posX, this.posY, this.width, this.height)
            this.image,
            this.framesIndex * Math.floor(this.image.width / this.frames),
            0,
            Math.floor(this.image.width / this.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(framesCounter)

    }


    move() {
        this.posX -= this.vx;
    }


    animate(framesCounter) {
        if (framesCounter % 10 === 0) {
            this.framesIndex++;

            if (this.framesIndex > 4) this.framesIndex = 0;
        }
    }
}