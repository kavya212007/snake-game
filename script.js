const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const grid = 20;
let snake = [{x: 200, y: 200}];

let dx = grid;
let dy = 0;

let food = {
x: Math.floor(Math.random()*20)*grid,
y: Math.floor(Math.random()*20)*grid
};

document.addEventListener("keydown", direction);

function direction(event){

if(event.key === "ArrowUp" && dy === 0){
dx = 0;
dy = -grid;
}

if(event.key === "ArrowDown" && dy === 0){
dx = 0;
dy = grid;
}

if(event.key === "ArrowLeft" && dx === 0){
dx = -grid;
dy = 0;
}

if(event.key === "ArrowRight" && dx === 0){
dx = grid;
dy = 0;
}

}

function draw(){

ctx.clearRect(0,0,400,400);

snake.forEach(part=>{
ctx.fillStyle="lime";
ctx.fillRect(part.x, part.y, grid, grid);
});

ctx.fillStyle="red";
ctx.fillRect(food.x, food.y, grid, grid);

let head = {
x: snake[0].x + dx,
y: snake[0].y + dy
};

snake.unshift(head);

if(head.x === food.x && head.y === food.y){

food = {
x: Math.floor(Math.random()*20)*grid,
y: Math.floor(Math.random()*20)*grid
};

}else{
snake.pop();
}

}

setInterval(draw,100);