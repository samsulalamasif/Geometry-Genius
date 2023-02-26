/* Card Button 1 */
document.getElementById("btn-card-one").addEventListener("click", function(){
    const cardName = elementName("triangle")
    const inputBase = inputNumber("triangle-base")
    const inputHeight = inputNumber("triangle-height")

    if(isNaN(inputBase) || isNaN(inputHeight) || inputBase<=0 || inputHeight<=0){
        return alert("please provide enter any number")
    }

    const triangleCalculation = 0.5 * inputBase * inputHeight
    areaCalculation(cardName, triangleCalculation.toFixed(2))

})


/* Card Button 2 */
document.getElementById("btn-card-two").addEventListener("click", function(){
    const cardName = elementName("rectangle")
    const inputWeight = inputNumber("rectangle-weight")
    const inputLength = inputNumber("rectangle-length")
    
    if(isNaN(inputWeight) || isNaN(inputLength) || inputWeight<=0 || inputLength<=0){
        return alert("please provide enter any number")
    }
    
    const rectangleCalculation = inputWeight * inputLength
    areaCalculation(cardName, rectangleCalculation.toFixed(2))
})


/* Card Button 3 */
document.getElementById("btn-card-three").addEventListener("click", function(){
    const cardName = elementName("parallelogram")
    const parallelogramBase = elementName("parallelogram-base")
    const parallelogramHeight = elementName("parallelogram-height")
    const parallelogramCalculation = parseInt(parallelogramBase) * parseInt(parallelogramHeight)
    areaCalculation(cardName, parallelogramCalculation.toFixed(2))
})


/* Card Button 4 */
document.getElementById("btn-card-four").addEventListener("click", function(){
    const cardName = elementName("rhombus")
    const rhombusD1 = elementName("rhombus-d1")
    const rhombusD2 = elementName("rhombus-d2")
    const rhombusCalculation = 0.5 * parseInt(rhombusD1) * parseInt(rhombusD2)
    areaCalculation(cardName, rhombusCalculation.toFixed(2))
})


/* Card Button 5 */
document.getElementById("btn-card-five").addEventListener("click", function(){
    const cardName = elementName("pentagon")
    const pentagonPerimeter = elementName("pentagon-perimeter")
    const pentagonBase = elementName("pentagon-base")
    const pentagonCalculation = 0.5 * parseInt(pentagonPerimeter) * parseInt(pentagonBase)
    areaCalculation(cardName, pentagonCalculation.toFixed(2))
})


/* Card Button 6 */
document.getElementById("btn-card-six").addEventListener("click", function(){
    const cardName = elementName("ellipse")
    const ellipseArea = elementName("ellipse-area")
    const ellipseBase = elementName("ellipse-base")
    const ellipseCalculation = Math.PI * parseInt(ellipseArea) * parseInt(ellipseBase)
    areaCalculation(cardName, ellipseCalculation.toFixed(2))
})


