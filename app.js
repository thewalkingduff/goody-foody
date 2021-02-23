// Good Foody

const goodFoods = document.querySelectorAll('.good')


function goodSound() {
    let sound = document.getElementById("goodFoody");
    sound.play();
}

for(let goodFood of goodFoods){
    goodFood.addEventListener('click', goodSound, false)
}

// Bad Foody

const badFoods = document.querySelectorAll('.bad')

function badSound() {
        let sound = document.getElementById("badFoody");
        sound.play();
    }
   
for(let badFood of badFoods){
        badFood.addEventListener('click', badSound, false)
    }
