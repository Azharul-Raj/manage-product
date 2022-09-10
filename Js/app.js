// input value taking function
const getInputValue = (id) => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value
    inputField.value = ``
    return inputValue
}
// local storage setItem as object
const getFromLocalStore = () => {
    const getElement = localStorage.getItem('all_products')
    let all_products = {}
    if (getElement) {
        all_products = JSON.parse(getElement)
    }
    return all_products
}
// const display products function
const setToStorage = (product,quantity) => {
    const productObj = getFromLocalStore()
    productObj[product] = quantity
    const stringifiedProduct = JSON.stringify(productObj)
    localStorage.setItem('all_products',stringifiedProduct)
}
// display product function
const display = (product,quantity) => {
    const productContainer = document.getElementById('all-products')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-4">${product}</span>
            Quantity:<small class="fw-bold">
                ${quantity}
            </small>
        </div>
        `
        productContainer.appendChild(div)
}
// btn event handler function here
const addProduct = () => {
    const productName = getInputValue('product-name')
    const productQuantity = getInputValue('product-quantity')
    if (isNaN(productName) && !isNaN(productQuantity) && productQuantity > 0) {
        display(productName,productQuantity)
        setToStorage(productName,productQuantity)
    }
    else {
        alert(`PRODUCT NAME CAN'T BE NUMBER AND PRODUCT QUANTITY CAN'T BE STRING`)
    }
}
// get product from storage function
const renderToDisplay = () => {
    const storedObj = JSON.parse(localStorage.getItem('all_products'))
    for (product in storedObj) {
        const quantity = storedObj[product]
        display(product,quantity)
    }
}
renderToDisplay()