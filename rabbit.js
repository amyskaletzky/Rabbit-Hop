import { incrementCustomProp, getCustomProp, setCustomProp } from "./UpdateCustomerProp.js"

const rabbitElement = document.querySelector('[data-rabbit]')
const HOP_SPEED = 0.45
const GRAVITY = 0.002
const RABBIT_FRAME_COUNT = 4 //or 2 if doesnt work   
const FRAME_TIME = 150 // every 100ms we change our animation

let isHopping
let currentFrameTime
let rabbitFrame
let yVelocity
export function setUpRabbit() {
    isHopping = false
    rabbitFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProp(rabbitElement, '--bottom', 22)
    document.removeEventListener('keydown', onHop) // need to make sure to first remove the event listener in case there already is one
    document.addEventListener('keydown', onHop)
}



export function updateRabbit(diff, speedScale) {
    handleRun(diff, speedScale)
    handleHop(diff)
}

export function getRabbitRect() {
    return rabbitElement.getBoundingClientRect()
}

export function setRabbitLose() {
    rabbitElement.src = `images/cry.png`
}

function handleRun(diff, speedScale) {
    if (isHopping) {
        rabbitElement.src = `images/rabbit-hop.png`
        return
    }

    if (currentFrameTime >= FRAME_TIME) {
        rabbitFrame = (rabbitFrame + 1) % RABBIT_FRAME_COUNT
        rabbitElement.src = `images/rabbit-move-${rabbitFrame}.png`
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += diff * speedScale
}

function handleHop(diff) {
    if (!isHopping) return
    // EXPLAINincrementing by yVelocity * diff because
    incrementCustomProp(rabbitElement, '--bottom', yVelocity * diff)

    if (getCustomProp(rabbitElement, '--bottom') <= 22) {       // 15 because this is the minimum value needed for the rabbit's position to be on top of the ground
        setCustomProp(rabbitElement, '--bottom', 22)
        isHopping = false
    }
    yVelocity -= GRAVITY * diff
}

const hopSound = new Audio()
hopSound.src = "bunny-hop-sounds/Jump-sound.mp3";
function onHop(evt) {
    if (evt.code !== 'Space' || isHopping) return
    yVelocity = HOP_SPEED
    isHopping = true
    hopSound.volume = 0.2;
    hopSound.currentTime = 0;
    hopSound.play();
}
