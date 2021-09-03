// Good Foody

const goodFoods: any[] = [...document.querySelectorAll('.good')]
console.log(goodFoods)

enum foody {
    good = "goodFoody",
    bad = "badFoody"
}

function goodSound() {
    let sound = document.getElementById(foody.good);
    return sound.play();
}

for(let goodFood of goodFoods){
    goodFood.addEventListener('click', goodSound, false)
}

// Bad Foody

const badFoods: any[] = [...document.querySelectorAll('.bad')]
console.log(badFoods);

function badSound() {
        let sound = document.getElementById(foody.bad);
        return sound.play();
    }
   
for(let badFood of badFoods){
        badFood.addEventListener('click', badSound, false)
    }
