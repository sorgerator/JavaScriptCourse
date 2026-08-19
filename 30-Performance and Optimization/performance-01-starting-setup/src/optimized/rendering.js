const productListEl = document.getElementById("product-list");
const renderedProducts = [];

function createElement(product, prodId, deleteProductDn) {
  const newListEl = document.createElement("li");
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;
  // const prodTitleEl = document.createElement("h2");
  // const prodPriceEl = document.createElement("p");
  const prodDeleteButtonEl = document.createElement("button");

  // prodTitleEl.innerHTML = product.title;
  // prodPriceEl.innerHTML = product.price;
  prodDeleteButtonEl.innerHTML = "DELETE";

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    "click",
    deleteProductFn.bind(null, prodId),
  );

  // newListEl.appendChild(prodTitleEl);
  // newListEl.appendChild(prodPriceEl);
  newListEl.appendChild(prodDeleteButtonEl);
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = "";
  const startTime = performance.now();
  products.forEach((product) => {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.appendChild(newListEl);
  });
  /*
  for (let i = 0; i < products.length; i++) {
    const newListEl = createElement(
      products[i],
      products[i].id,
      deleteProductFn,
    );
    productListEl.appendChild(newListEl);
  }
  */
  const endTime = performance.end();
  console.log(endTime - startTime);
}

export function updateProducts(product, prodId, deleteProductsFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement("afterbegin", newProductEl);
    renderProducts.push(newProductsEl);
    console.log(renderProducts);
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
  }
}
