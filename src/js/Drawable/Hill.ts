import {settings} from "../settings";
import {Hsl} from "../Helpers/Hsl";

export class Hill{
    canvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    amplitude:number;
    height:number;
    startPosition: number;
    color:Hsl;

    constructor(ctx: CanvasRenderingContext2D,canvasElement: HTMLCanvasElement,amplitude:number,height:number,startPosition:number,color:Hsl) {
        this.canvasElement= canvasElement;
        this.ctx =ctx;
        this.amplitude = amplitude;
        this.height = height;
        this.startPosition = startPosition;
        this.color = color;
        this.draw();
    }

    draw(){
        this.ctx.fillStyle = this.color.toString();
        this.ctx.beginPath();
        this.ctx.moveTo(0,this.canvasElement.height);
        this.ctx.lineTo(0,this.startPosition);
        for (let i = 0; i < this.canvasElement.width; i++) {
            this.ctx.lineTo(i,(this.canvasElement.height-this.startPosition-settings.hill.startPosition) + Math.sin(i*this.amplitude/this.canvasElement.width)*this.height/2)
        }
        this.ctx.lineTo(this.canvasElement.width, this.canvasElement.height);
        this.ctx.fill();
        this.ctx.closePath();

    }
}