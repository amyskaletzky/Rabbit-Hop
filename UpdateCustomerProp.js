///by taking a value from a css and converting it into a js value and back again to css variable
//because everything on css is a string we create a function that convert to a float(number)
/// and if there is not value just defult '0'

export function getCustomProp(elem, prop) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}
//After converting the values to float we need to use the computerd values
export function setCustomProp(elem, prop, value) {
    elem.style.setProperty(prop, value)
}

//setting the values
export function incrementCustomProp(elem, prop, inc){
    setCustomProp(elem,prop,getCustomProp(elem,prop) + inc)
}