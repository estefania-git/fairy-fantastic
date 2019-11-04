const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,




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
        this.interval = setIntenval(() => {
            this.framesCounter++;

            this.clear();
            this.drawAll();
            this.moveAll();


        }, 1000 / this.fps)
    },

}