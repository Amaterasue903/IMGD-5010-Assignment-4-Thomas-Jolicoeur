# IMGD-5010-Assignment-4-Thomas-Jolicoeur
## Idea
My initial idea turned out far different from what i ended up with (Curse http for ruining my plans), I used the lessons we learned in class and the stater code to create a mesh of both that displays a strange view on currency exchange rates where it changes the alpha and color based on the rate of conversion for pounds. Then set them to move to almost make it seem like weaker conversion rates were being overtaken by stronger ones. In a way showing the disparity of wealth between countries and the EU in a unique way that shows rather than tells. It took a while for me to get this to work I struggled a lot on understanding how to mesh api's into the normal swing of things, but after like 8~10hours I'm pretty happy with what i cooked up.

##  Code
```
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
```

## Link P5js
https://editor.p5js.org/Amaterasu903/sketches/yiUFz1Mlz
