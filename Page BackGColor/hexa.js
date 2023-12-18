const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const paf = document.getElementById('paf');
const color = document.querySelector('.color');



paf.addEventListener("click", function() {
    let colorHex = "#";
    for (let i = 0; i < 6; i++) {
        colorHex += hexColors[getRandomHex()];
    }
    // console.log(colorHex);
    color.textContent = colorHex;
    document.body.style.backgroundColor = colorHex;
});

function getRandomHex() {
    return Math.floor(Math.random() * hexColors.length);

    // let num;
    // num = Math.floor(Math.random() * hexColors.length);
    // console.log (num)
    // return num
}

