import React from 'react'
//p5
import Sketch from 'react-p5'
const Canva = () => {
    var on = false;
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef)
    }
  
    const draw = p5 => {
        if (on) {
            p5.background(0, 255, 0);
        } else {
            p5.background(0);
        }
   
        p5.stroke(255);
        p5.strokeWeight(4);
        p5.noFill();
        if (p5.mouseX > 150 && p5.mouseX < 250 && p5.mouseY > 150 && p5.mouseY < 250) {
    
            p5.fill(255, 0, 200);
 
        }

        p5.rectMode(p5.CENTER);
        p5.rect(200, 200, 100, 100)
        //   if(mouseIsPressed) {
        //    ellipse(mouseX, mouseY, 5,5)
        //   }
    }
        const mousePressed = (p5) => {
            // background(0,255,0);
            //     ellipse(mouseX, mouseY, 5,5)
            //   print("clicked")
            if (p5.mouseX > 150 && p5.mouseX < 250 && p5.mouseY > 150 && p5.mouseY < 250) {
                on = !on;
            }
 
        }
  
        return (
            <>
                <Sketch setup={setup} draw={draw} mousePressed={mousePressed}></Sketch>
            </>
        )
    

}

export default Canva;