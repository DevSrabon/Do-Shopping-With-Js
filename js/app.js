
const cartArray = [];
function display(cardProduct) {
    // console.log(cardProduct);
    const tableBody = document.getElementById('products-cart');
    tableBody.innerHTML = '';
    let totalPrice = 0;
    
    for (let i = 0; i < cartArray.length; i++) {
        
        // console.log(cartArray[i].pdName, cartArray[i].pdPrice)
        const name = cartArray[i].pdName;
        const price = cartArray[i].pdPrice;

        totalPrice = totalPrice + price;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td>
            <td>${price}</td>
        `;
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td> Total : </td>
    <td>${totalPrice}</td>
    `
    tableBody.appendChild(tr);
}
function addToCart(element) {
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    const productObj = {
        pdName : pdName,
        pdPrice : parseFloat(pdPrice)
    }
    cartArray.push(productObj);
    // console.log(cartArray)
    // console.log(cartArray.length);
    document.getElementById('total-products').innerText = cartArray.length;
    display(cartArray);
}