import { updateProducts } from "./rendering";
import { products } from "./products";

const titleEl = document.getElementById("title");
const priceEl = document.getElementById("price");

// let products = prods;

// export function initProducts() {
//   renderProducts(products, deleteProduct);
// }

export function deleteProduct(prodId) {
  const deleteProductIndex = products.findIndex((prod) => prod.id === prod.id);
  const deletedProduct = products[deleteProductIndex];
  products.splice(deleteProductIndex, 1);
  /* 
  const updatedProducts = [];
  let deletedProduct;
  for (const prod of products) {
    if (prod.id !== prodId) {
      updatedProducts.push(prod);
    } else {
      deletedProduct = prod;
    }
  }
  products = updatedProducts;
  */
  updateProducts(deleteProduct, prodId, deleteProduct, false);
  // renderProducts(products, deleteProduct);
}

export function addProduct(event) {
  // event.preventDefault();
  // const titleEl = document.querySelector("#new-product #title");
  // const priceEl = document.querySelector("#new-product #price");

  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert("Please enter some valid input values for title and price.");
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  products.unshift(newProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
  // renderProducts(products, deleteProduct);
}
