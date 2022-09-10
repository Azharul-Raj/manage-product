// input value taking function
const getInputValue = (id) => {
    const inputField = document.getElementById(id)
    inputField.value = ``
    return inputField.value
}
// btn event handler function here
const addProduct = () => {
    const productName = getInputValue('product-name')
}
