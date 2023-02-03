import {getCustomProp, incrementCustomProp, setCustomProp } from "./UpdateCustomerProp.js";
//In this section on the script we are going to pay attention to the movingGround.
//1) We will create a function where we're taking the current positing on the ground img and updating it,
//which means at the end of the game the ground img will rest and start over again from the start.

const speed = 0.05;
const groundElems = document.querySelectorAll("[data-ground]");

export function setGround() {
    setCustomProp(groundElems[0], "--left", 0)
    setCustomProp(groundElems[0],"--left", 200)
}

function updatedGround(diff) { ///moves to the left every single time
    groundElems.forEach(ground => {
        incrementCustomProp(ground, "--left",diff * speed * -1)

    if (getCustomProp( ground, "--left")<= -200){
        finalIncrementCustomProp(ground, "--left", 400)
    }
});
} 