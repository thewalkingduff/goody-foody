Good Foody

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

    


    function goodSound() {
        const sound = document.getElementById("goodFoody")
        sound.play();
    }

    const goodFoods = document.querySelectorAll('.good')
    
    for(let goodFood of goodFoods){
        goodFood.addEventListener('click', goodSound, false)
    }
    
    // Bad Foody
    
    
    
    function badSound() {
        const sound = document.getElementById("badFoody");
            sound.play();
        }

    const badFoods = document.querySelectorAll('.bad')
       
    for(let badFood of badFoods){
            badFood.addEventListener('click', badSound, false)
        }