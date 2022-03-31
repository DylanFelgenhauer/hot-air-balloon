import {Sky} from "./Drawable/Sky";
import {settings} from "./settings";
import {Hill} from "./Drawable/Hill";

export class Canvas{
    private sky:Sky;
    private canvasElement: HTMLCanvasElement;
    private ctx : CanvasRenderingContext2D;
    private hills : Hill[];

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.sky = new Sky(this.canvasElement, this.ctx);
        this.hills=[];
        this.addEventListeners();
        this.resizeCanvas();
        this.update();
    }

    resizeCanvas(){
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
        this.sky.draw();
    }

    addEventListeners(){
        window.addEventListener('resize',()=>{
            this.resizeCanvas()
        })
    }

    update(){
        settings.hill.hills.forEach(hill=>{
            this.hills.push(new Hill(this.ctx,this.canvasElement,hill.amplitude,hill.height,hill.startPosition,hill.color))
        })
    }
}