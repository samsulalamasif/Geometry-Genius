/*---------- Input Element Function---------- */
function inputNumber(element) {
    const inputNumberId = document.getElementById(element)
    const inputNumberString = inputNumberId.value
    const number = parseFloat(inputNumberString)
    inputNumberId.value = ""
    return number
}


/*---------- Text Element Function---------- */
function elementName(element) {
    const elementNameId = document.getElementById(element)
    const name = elementNameId.innerText
    return name
}



/* ----------Area Calculation ---------- */


let sum = 0
function areaCalculation(nameCard, calculation) {
    const container = document.getElementById("area-table")
    const tr = document.createElement("tr")
    tr.innerHTML =
        ` <td class="text-base p-1 ">${sum = sum + 1}<span>.</span></td>
    <td class="text-base p-1  ">${nameCard}</td>
    <td class="text-base px-5">${calculation} <span>cm<span>&#178;</span></span></td>
    <td> 
    <button class="btn btn-xs btn-info text-xs ">Convert</button>
    </td> `
    container.appendChild(tr)
}



/* ----------Blog Site link---------- */
document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "blog.html"
})





/* ----------Random Color Function---------- */
function getRandomColor() {
    const availableCharacters = '0123456789ABCDEF';
    const availableCharacterLength = availableCharacters.length;
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += availableCharacters[Math.floor(Math.random() * availableCharacterLength)];
    }
    return color;
}


/*---------- Random Color addEventListener---------- */
const cards = document.getElementsByClassName("card-container")
for(const card of cards){

    card.addEventListener("mouseenter", function(){
        card.style.backgroundColor = getRandomColor()
    })
    card.addEventListener("mouseout", function(){
        card.style.backgroundColor = "white"
    })
}


    



