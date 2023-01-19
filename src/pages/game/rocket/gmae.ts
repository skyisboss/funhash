import { Bezier } from "bezier-js";

type Point = {x: number,y:number}
export const game = {
    canvas: {} as HTMLCanvasElement,
    ctx: {} as CanvasRenderingContext2D,
    t: 0,
    width: 0,
    height: 0,
    padding: 50,
    curve: {} as Bezier,
    points: {} as { [x:string]: Point },
    initGame: (el = 'canvas')=>{
        const _el = document.getElementById(el);
        if (!_el) {
            return;
        }
        const ratio = window.devicePixelRatio || 1;
        const canvas =  _el as HTMLCanvasElement;
        game.ctx = canvas.getContext("2d") as CanvasRenderingContext2D
        game.width = canvas.width;
        game.height = canvas.height;
        game.canvas = canvas;
        // window.onresize = function () {
        //     game.resize();
        // };
        game.points = {
            p1: {x: game.padding, y: game.height - game.padding},
            p2: {x: game.width-300, y: game.height - game.padding - 120},
            p3: {x: game.width-100, y: 100},
        }
        game.curve = new Bezier(game.points.p1, game.points.p2, game.points.p3);
        game.render()
    },
    resize: ()=>{},
    // 绘制坐标轴
    drawAxis: ()=>{
        const ctx = game.ctx;
        const startPoint = game.padding;
        const yHeight = game.height - game.padding
        const xWidth  = game.width - game.padding

        ctx.shadowBlur = 0;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#607d8b";
        ctx.font = "14px Microsoft YaHei";
        ctx.fillStyle  = '#607d8b'
        ctx.beginPath()
        ctx.moveTo(startPoint, startPoint);
        ctx.lineTo(startPoint, yHeight);
        ctx.lineTo(xWidth, yHeight);
        ctx.stroke();
    },
    // 轴刻度
    drawChart: ()=>{
        const ctx = game.ctx;
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "#607d8b";

        let yNumber = 5; // y轴的段数
        let ySpace = Math.floor((game.height - game.padding * 2) / yNumber);     // y轴每段的真实长度

        let xNumber = 10; // x轴的段数
        let xSpace = Math.floor((game.width - game.padding * 2) / xNumber);  // x轴每段的真实长度
        // 是否显示刻度上的圆点
        let showPoint = false;
        // 是否全屏刻度线
        let fullLine = false;
        // 是否移动刻度线
        let moveLine = true;

        // y轴刻度 o点从下往上绘制
        ctx.textAlign = 'right'  
        for (let i = 0; i < yNumber; i++) {
            // TODO:: 根据运行时间计算刻度移动
            let space = ySpace * i;
            if (moveLine) {
                // if (this.t > 0.95){
                    // space = ySpace * (i) - this.t * 60;
                // }
            }
            let x1 = game.padding;
            let y1 = game.height - game.padding - space;

            let x2 = game.width - game.padding;
            let y2 = game.height - game.padding - space;
            if (!fullLine) {
                x2 = game.padding +15
            }

            ctx.beginPath()
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            let text = i * 0.5 + 1
            game.ctx.fillText(`${text.toFixed(2)}x`, x1 - 5, y1 + 5);
        }

        // x轴刻度和值 从左往右绘制
        ctx.textAlign = 'left'
        for (let i = 1; i < xNumber; i++) {
            // TODO:: 根据运行时间计算刻度移动
            let space = xSpace * i;
            let x1 = game.padding + space
            let y1 = game.height - game.padding;

            let x2 = game.padding + space
            let y2 = game.padding;

            if (!fullLine) {
                y2 = game.height - game.padding - 15
            }
            
            ctx.beginPath()
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            game.ctx.fillText(`${i}s`, x1 - 5, y1 + 20);
        }
    },
    drawPoint: (p:Point, radius?:number, offset?: Point) =>{
        const ctx = game.ctx
        var radialGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 30);
        radialGradient.addColorStop(0, "rgba(53, 195, 30,1)");
        radialGradient.addColorStop(.2, "rgba(53, 195, 30,.8)");
        radialGradient.addColorStop(1, "transparent");
        ctx.fillStyle = radialGradient;

        offset = offset || { x: 0, y: 0 };
        var ox = offset.x;
        var oy = offset.y;
        ctx.beginPath();
        ctx.arc(p.x + ox, p.y + oy, radius || 8, 0, 2 * Math.PI);
        ctx.fill()
    },
    drawCurve: (p:Point[], offset?:Point) =>{
        const ctx = game.ctx

        offset = offset || { x: 0, y: 0 };
        var ox = offset.x;
        var oy = offset.y;
        ctx.beginPath();
        // var p = curve.points,i;
        ctx.moveTo(p[0].x + ox, p[0].y + oy);
        if (p.length === 3) {
            ctx.quadraticCurveTo(p[1].x + ox, p[1].y + oy, p[2].x + ox, p[2].y + oy);
        }
        if (p.length === 4) {
            ctx.bezierCurveTo(
                p[1].x + ox,
                p[1].y + oy,
                p[2].x + ox,
                p[2].y + oy,
                p[3].x + ox,
                p[3].y + oy
            );
        }

        ctx.stroke();
        ctx.closePath();
    },
    createGradient: (p:Point[]) =>{
        
        const ctx = game.ctx
        
        var grd = ctx.createLinearGradient(p[0].x, p[0].y, p[2].x, p[2].y);
        grd.addColorStop(0, "rgba(24, 160, 88, 0.16)");
        grd.addColorStop(1, "#35c31e");
        ctx.lineWidth = 4;
        ctx.strokeStyle = grd;
        ctx.shadowColor = '#35c31e'
        ctx.shadowBlur = 20
    },
    render: ()=>{
        game.drawAxis()
        game.drawChart()

        let point = game.curve.split(0, 0.5);
        game.drawChart()
        game.createGradient(point.points)
        game.drawCurve(point.points)
        game.drawPoint(point.points[2])
    }
}