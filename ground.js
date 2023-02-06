import {
    getCustomProp,
    incrementCustomProp,
    setCustomProp
} from "./UpdateCustomerProp.js";

// Here we set up the two ground imgs we have to make it look like 
// it's one ground img that is moving infinitely until the game ends

const SPEED = 0.04;
const groundElems = document.querySelectorAll("[data-ground]");

export function setupGround() {
    setCustomProp(groundElems[0], "--left", 0)
    setCustomProp(groundElems[1], "--left", 300)  // 300 because the width of the img in CSS is set to 300%, and since the property 'left' is a percentage; this way the 2nd ground image meets the first img right where it ends
}


export function updateGround(diff, speedScale) {
    groundElems.forEach(ground => {
        incrementCustomProp(ground, "--left", diff * speedScale * SPEED * -1) //using speedScale to increase the speed of the ground gradually, making it harder and harder + using -1 so that it moves to the left rather than to the right

        if (getCustomProp(ground, "--left") <= -300) {      // here we're checking if the ground has moved all the way off the edge of the screen
            incrementCustomProp(ground, "--left", 600)      // 600 -> because if we put 300, it would place the ground in the start of the screen, by adding another 300 it makes it so that this ground element comes right after the first ground element from the right side of the screen
        }
    })
}

