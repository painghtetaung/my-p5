import React from 'react'
//p5
import Sketch from 'react-p5'
const Sparkle = () => {
   let x, y, r, g, b;
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.background(0);
    }

    const draw = (p5) => {
        r = p5.random(255);
        g = 0;
        b = p5.random(255);
        x = p5.random(p5.width);
        y = p5.random(p5.height);
        p5.noStroke();
        p5.fill(r, g, b, 150);
        p5.circle(x, y, 2);

    }

        return (
            <>
                <Sketch setup={setup} draw={draw}></Sketch>
            </>
        )
    

}

export default Sparkle;