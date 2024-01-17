let btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    let h1 = document.querySelector('#h1');
    let randomColor = getColor();
    h1.innerHTML = randomColor;
    let bgDiv = document.querySelector('.div');
    bgDiv.style.backgroundColor = randomColor;
})



function getColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
