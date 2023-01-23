let color = "black";


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "green";
    } else if (event.key === 's') {
        color = "salmon";
    } else if (event.key === 'd'){
        color = "violet";
    }
    });
 
    let div1 = document.querySelector("#div1");
    let div2 = document.querySelector("#div2");
    let div3 = document.querySelector("#div3");
    let div4 = document.querySelector("#div4");


    div1.addEventListener("click", () => div1.style.backgroundColor = color);
    div2.addEventListener("click", () => div2.style.backgroundColor = color);
    div3.addEventListener("click", () => div3.style.backgroundColor = color);
    div4.addEventListener("click", () => div4.style.backgroundColor = color);

