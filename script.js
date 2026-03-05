const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{x:10,y:10}];
let food = {x:15,y:15};
let dx = 0;
let dy = 0;

document.addEventListener("keydown", direction);

function direction(event){
    if(event.key === "ArrowUp") {dx=0; dy=-1;}
    if(event.key === "ArrowDown") {dx=0; dy=1;}
    if(event.key === "ArrowLeft") {dx=-1; dy=0;}
    if(event.key === "ArrowRight") {dx=1; dy=0;}
}

function draw(){
    ctx.clearRect(0,0,400,400);

    snake.forEach(part=>{
        ctx.fillStyle="green";
        ctx.fillRect(part.x*20,part.y*20,20,20);
    });

    ctx.fillStyle="red";
    ctx.fillRect(food.x*20,food.y*20,20,20);

    let head={x:snake[0].x+dx,y:snake[0].y+dy};
    snake.unshift(head);

    if(head.x===food.x && head.y===food.y){
        food={
            x:Math.floor(Math.random()*20),
            y:Math.floor(Math.random()*20)
        };
    } else {
        snake.pop();
    }
}

setInterval(draw,100);