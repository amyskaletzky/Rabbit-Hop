import { setCustomProp, incrementCustomProp, getCustomProp } from "./UpdateCustomerProp.js"

const SPEED = 0.001     // same speed as ground moving

// these are intervals for how long between summoning an egg on the screen
const EGGS_INTERVAL_MIN = 500           // min = 500ms 
const EGGS_INTERVAL_MAX = 2000          // max = 2s

const container = document.querySelector('[data-container]')

let nextEggTime
export function setupEasterEggs() {
    nextEggTime = EGGS_INTERVAL_MIN
    document.querySelectorAll('.easter-egg-div').forEach(egg => {
        egg.remove()
    })
}

export function updateEasterEggs(diff, speedScale) {
    let eggs = document.querySelectorAll('.easter-egg')
    console.log(eggs);
    eggs.forEach(egg => {
        incrementCustomProp(egg, "--left", diff * speedScale * SPEED * -1)
        if (getCustomProp(egg, "--left") <= -100) {
            egg.parentElement.remove()
        }
    })

    if (nextEggTime <= 0) {
        createEgg()
        nextEggTime = randomIntBetween(EGGS_INTERVAL_MIN, EGGS_INTERVAL_MAX) / speedScale       // this is done to make the eggs spawn faster and faster, like the ground 
    }
    nextEggTime -= diff         // this num decreases and decreases until it's below 0 and then it creates an easter egg

}

function createEgg() {
    const egg = document.createElement('div')
    const img = document.createElement('img')
    img.src = 'images/easter-egg.png'
    egg.append(img)
    img.classList.add('easter-egg')
    egg.classList.add('easter-egg-div')
    setCustomProp(egg, '--left', 100)
    container.appendChild(egg)
}


function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}