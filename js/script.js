const firstDiv = window.document.getElementById("first-div");
const html = window.document.getElementById("d");
const firstClassElements = window.document.getElementsByClassName("first-class");
let app2 = null;
app2 = "a";

console.log(html);
console.log(firstDiv);
console.log(firstClassElements);


firstDiv.addEventListener("click", changeColor);
firstDiv.addEventListener("mouseover", firstDivOver);
firstDiv.addEventListener("mouseout", firstDivOut);

function changeColor(pointerEvent) {
    console.log(pointerEvent);
    if (firstClassElements.length >= 3) {
        firstDiv.innerHTML = "Cambio colore";
        firstDiv.style.color = "red";
    } else {
        firstDiv.innerHTML = "Non cambio colore";
        const newDiv = window.document.createElement("div");
        newDiv.classList.add("first-class");
        newDiv.innerText = "Nuovo elemento";
        window.document.body.appendChild(newDiv);
    }
    while (firstClassElements.length < 6) {
        const newDiv = window.document.createElement("div");
        newDiv.classList.add("first-class");
        newDiv.innerText = "Aggiunto da un ciclo";
        window.document.body.appendChild(newDiv);
    }
    for (let i=0; i<firstClassElements.length; i++) {
        firstClassElements[i].innerHTML += " roba aggiunta da ciclo for con index "+ i;
    }
}

function firstDivOver(mouseEvent) {
    console.log(mouseEvent);
    firstDiv.style.backgroundColor = "black";
}

function firstDivOut() {
    firstDiv.style.backgroundColor = "yellow";
}
