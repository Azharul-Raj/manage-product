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
// 
// btn event handler function here
const addProduct = () => {
    const productName = getInputValue('product-name')
    const productQuantity = getInputValue('product-quantity')
    if (isNaN(productName) && !isNaN(productQuantity)) {
        const productContainer = document.getElementById('all-products')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-1">${productName}</span>
            Quantity:<small class="fw-bold">
                ${productQuantity}
            </small>
        </div>
        `
        productContainer.appendChild(div)

    }
    else {
        alert(`PRODUCT NAME CAN'T BE NUMBER AND PRODUCT QUANTITY CAN'T BE STRING`)
    }
}
