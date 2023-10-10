function setup() {
    createCanvas(innerWidth,innerHeight)

    background('rgb(100%,0%,10%)')
    rectmode(center)
}

function draw() {
    //background(0, 200, 100)
    let red = map(mouseX, 0, width, 0, 255)
    fill(255, 0, 0)
    //noFill()
    strokeWeight(2)
    stroke(mouseX, mouseY, 255)
    rect(mouseX, mouseY, mouseX, mouseY);
    //text("hhey", mouseX, mouseY)
}

function windowResized() {
    resizeCanvas()
}
