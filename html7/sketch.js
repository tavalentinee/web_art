function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
}

function draw() {
    //background(0, 200, 100)
    let red = map(mouseX, 0, width, 0, 255)
    fill(183, 255, 10)
    //noFill()
    strokeWeight(8)
    stroke(0, mouseY, mouseY)
    rect(mouseX, mouseY, mouseX, mouseY);
    //text("hhey", mouseX, mouseY)
}

function windowResized() {
    resizeCanvas()
}