let test 
let circles = [] 

function setup() {
  createCanvas(800, 800)
  // Load JSON data and store in variable test 
  test = loadJSON('https://api.exchangerate-api.com/v4/latest/GBP', circleParamaters)
}
//this function defines and pushes the data and spefic valus to the array
function circleParamaters() {
  const rates = Object.values(test.rates);
  for (let i = 0; i < rates.length; i++) {
    let c = {
      x: random() * width,
      y: random() * height,
      size: 40,
      speed: random() * 3,
      rate: rates[i],//this saves the rates of currencies to be used later
    };
    circles.push(c);
  }
}



function draw() {
  background(220)
  // grabs circle array to prep to be drawn
  if (test) {
    for (let i = 0; i < circles.length; i++) {
      let c = circles[i] 
      noStroke()
      //Uses rate from api or transfer rates to control alpha
      fill(c.rate, 0, 0, c.rate) 
      circle(c.x, c.y, c.size)
      
      // Move the circle and cause it to loop to other end
      c.x += c.speed;
      c.y += c.speed;
      if (c.x > width) c.x -= width;
      if (c.y > height) c.y -= height;
    }
  }
}