import { getCustomProp, incrementCustomProp, setCustomProp } from "./UpdateCustomerProp.js";
//In this section on the script we are going to pay attention to the movingGround.
//1) We will create a function where we're taking the current positing on the ground img and updating it,
//which means at the end of the game the ground img will rest and start over again from the start.

const SPEED = 0.1;
const groundElems = document.querySelectorAll("[data-ground]");

export function setupGround() {
    setCustomProp(groundElems[0], "--left", 0)
    setCustomProp(groundElems[1], "--left2ndImg", 300)
    console.log(groundElems[0]);
    console.log(groundElems[0]);
}

export function updateGround(diff) {            // moves the ground to the left everytime funtion update is called
    // groundElems.forEach(ground => {

    incrementCustomProp(groundElems[0], "--left", diff * SPEED * -1) // * -1 so it moves backwards
    incrementCustomProp(groundElems[1], "--left", diff * SPEED * -1) // * -1 so it moves backwards
    // if (getCustomProp(groundElems[0], "--left") <= -300) {
    //     console.log('hi');
    //     incrementCustomProp(groundElems[1], "--left", 300)
    // } else if (getCustomProp(groundElems[1], "--left") <= -300) {
    //     incrementCustomProp(groundElems[1], "--left", 300)

    // }
    // });
    let windowWidth = window.innerWidth;
    groundElems.forEach(ground => {
        if (ground < )
    })
} 