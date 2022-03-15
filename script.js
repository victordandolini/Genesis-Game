let sequency = [];
let clickedSequency = [];
var score = 0;

let green = document.querySelector('.green');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let yellow = document.querySelector('.yellow');
let scoreDisplay = document.querySelector('.score');


//create random order of colors
let  changeSequency = () => {
    let colorSequency = Math.floor(Math.random() * 4);
    sequency[sequency.length] = colorSequency;
    clickedSequency = [];
    
    for(let i in sequency) {
        let elementColor = createElementColor(sequency[i]);
        lightColor(elementColor, Number(i) + 1);
         
    }

}

//turn on the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(()=> {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(()=> {
        element.classList.remove('selected');
    }, number - 100); 
    
}

//checks if the clicked buttons are the same as the origin generated in the game
let checkSequency = ()=> {
    for (let i in clickedSequency) {
        if (clickedSequency[i] != sequency[i]) {
            gameOver();
             break;            
        }
    }
    
}

//player click function
let click = (color) => {
    clickedSequency[clickedSequency.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(()=> {
        createElementColor(color).classList.remove('selected');
        checkSequency();
    }, 250); 

    if (clickedSequency.length == sequency.length) {
        nextLevel();
    }
}

//function that returns a color
let createElementColor = (color) => {
    if (color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return blue;
    } else if (color == 3){
        return yellow;
    }
}

//function for next game level
let nextLevel = ()=>{
    score++;
    scoreDisplay.innerHTML = `Score: ${score}\n`;
    
    setTimeout(()=> {
        changeSequency();
    }, 1100); 
}

//function for the game over
let gameOver = ()=> {
    scoreDisplay.innerHTML = `Score: 0`;
    alert(`Score: ${score} \nYou lost the game!\nClick start to restart the game`);
    sequency = [];
    clickedSequency = [];
    score = 0;
    
}

//function for the play game
let playGame = ()=>{
    alert('Welcome to the Genesis game!\nClick start game!')
}

//Click values
green.onclick = ()=> click(0)
red.onclick = ()=> click(1)
blue.onclick = ()=> click(2)
yellow.onclick = ()=> click(3)

playGame();
