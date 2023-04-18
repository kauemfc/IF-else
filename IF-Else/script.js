let btn = document.getElementById('btn-color');
let fundoFalse = false

btn.addEventListener('click', () => {
    if (fundoFalse) {
        fundoFalse = false;
        document.body.style.background = "#0025";
        btn.style.background = "white";
        btn.style.color = "black";
    } else {
        fundoFalse = true;
        document.body.style.background = "white";
        btn.style.background = "#0025";
        btn.style.color = "black";
    }
});