class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;


        this.image = new Image();
        this.image.src = '../images/fotomurales-mundo-fantasia.png';


        this.posX = 0;
        this.posY = 0;
    }
}