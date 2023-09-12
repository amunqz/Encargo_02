let circles = []; // Almacenar todas las circunferencias en un arreglo
let numCircles = 3; // Número inicial de circunferencias
let previousCircles = []; // Almacenar las formas anteriores

function setup() {
  createCanvas(1550, 750);
  createCircles(numCircles); // Crear las circunferencias iniciales
}

function draw() {
  background(0);
  
  // Dibujar todas las circunferencias anteriores
  for (let i = 0; i < previousCircles.length; i++) {
    let circle = previousCircles[i];
    fill(150); // Cambiar el color de las formas anteriores
    ellipse(circle.x, circle.y, circle.radius * 5);
  }
  
  // Dibujar todas las circunferencias existentes
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(255);
    ellipse(circle.x, circle.y, circle.radius * 5);
  }
}

function createCircles(num) {
  previousCircles = circles.slice(); // Almacenar las formas anteriores
  circles = []; // Limpiar el arreglo de circunferencias
  
  // Crear las circunferencias con posiciones y radios aleatorios
  for (let i = 0; i < num; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      radius: random(10, 40)
    };
    circles.push(circle);
  }
}

function mousePressed() {
  let newNumCircles = numCircles + 5; // Incrementar el número de circunferencias
  createCircles(newNumCircles); // Crear nuevas circunferencias
  
  // Mover todas las circunferencias existentes hacia la posición del ratón
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let dx = mouseX - circle.x;
    let dy = mouseY - circle.y;
    circle.x += dx;
    circle.y += dy;
  }
  
  numCircles = newNumCircles; // Actualizar el número de circunferencias
}
