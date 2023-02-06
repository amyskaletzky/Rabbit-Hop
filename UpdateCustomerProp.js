// Here are some helper functions to help us in:
// updating the CSS values of a specific CSS variable
// then converting it into a JS value
// and then converting it back to a CSS variable


// a function to get the value of the css property of the element of choice
export function getCustomProp(elem, prop) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0 // parseFloat() as it returns the property value as a string by default
}

// a function to set the value of the css property of the element of choice
export function setCustomProp(elem, prop, value) {
    elem.style.setProperty(prop, value)
}

// a function to set and increment the value of the css property of the element of choice
export function incrementCustomProp(elem, prop, inc) {
    setCustomProp(elem, prop, getCustomProp(elem, prop) + inc)
}