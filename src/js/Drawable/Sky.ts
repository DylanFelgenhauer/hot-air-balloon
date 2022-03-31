import {settings} from "../settings";

export class Sky {
     canvasElement: HTMLCanvasElement;
     ctx: CanvasRenderingContext2D;
     gradient: CanvasGradient;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.update();
    }

    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(this.canvasElement.width / 2, 0, this.canvasElement.width / 2, this.canvasElement.height);
            this.gradient.addColorStop(0,settings.sky.gradient[0]);
            this.gradient.addColorStop(1,settings.sky.gradient[1]);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.ctx.closePath();
    }

    update() {
        this.generateGradient();
        this.draw();
    }
}

