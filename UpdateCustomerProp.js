///by taking a value from a css and converting it into a js value and back again to css variable
//because everything on css is a string we create a function that convert to a float(number)
/// and if there is not value just default '0'

export function getCustomProp(elem, prop) {
    console.log(parseFloat(getComputedStyle(elem).getPropertyValue(prop)))
    // console.log("elem", elem);
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0 // never read -> always starts 0
}

//After converting the values to float we need to use the computerd values
export function setCustomProp(elem, prop, value) {
    elem.style.setProperty(prop, parseInt(value))
    // console.log(elem.style);
}

//setting the values
export function incrementCustomProp(elem, prop, inc) {
    console.log(getCustomProp(elem, prop) + inc);
    setCustomProp(elem, prop, getCustomProp(elem, prop) + inc)
}