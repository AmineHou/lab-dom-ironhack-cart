// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span')

  const subTotalprice = price.innerHTML * quantity.value

  subTotal.textContent = subTotalprice

  return subTotalprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProduct = document.getElementsByClassName('product');
  let sumSubTotal = 0
  for (let i = 0; i < multipleProduct.length; i++) {
    updateSubtotal(multipleProduct[i])
    sumSubTotal += updateSubtotal(multipleProduct[i])
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = sumSubTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
