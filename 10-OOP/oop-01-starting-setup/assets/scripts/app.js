class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttribuute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price;
    }, 0);

    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log("Ordering...");
      console.log(this.items);
    };
    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
    // this.items.push(product);
    // this.render();
    this.totalOutput.innerHTML = `<h2>Total: $${this.totalAmount.toFixed(2)}</h2>`;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    // const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    // cartEl.className = "cart";
    // this.totalOutput = cartEl.querySelector("h2");
    // return cartEl;
    const orderButton = cartEl.querySelector("button");
    // orderButton.addEventListener("click", () => this.orderProducts());
    orderButton.addEventListener("click", () => this.orderProducts());
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    // console.log("Adding product to cart...");
    // console.log(this.product);
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList extends Component {
  #products = [];

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.#fetchProducts();
  }

  #fetchProducts() {
    this.#products = [
      new Product(
        "A pillow",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxX33IKWDkRC4vIzLiGuH-DD8ucMPNEquEUum2sKJvQ&s=10",
        19.99,
        "A soft pillow",
      ),
      new Product(
        "A carpet",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18CtD2W24eeeLKKsz9sYSOjs7JdWWQezJ5ctvvUiONw&s=10",
        89.99,
        "A carpet which you might like - or not.",
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    // const renderHook = document.getElementById("app");
    this.createRootElement("ul", "product-list", [
      new ElementAttribuute("id", "prod-list"),
    ]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
    // prodList.id = "prod-list";
    // prodList.className = "product-list";
    // for (const prod of this.products) {
    // const productItem = new ProductItem(prod, "prod-list");
    // productItem.render();
    // prodList.append(prodEl);
    // new ProductItem(prod, "prod-list");
    // }
    // return prodList;
  }
}

class Shop extends Component {
  constructor() {
    super("", false);
  }

  render() {
    // const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    // this.cart.render();
    // const cartEl = cart.render();
    // const productList = new ProductList();
    // const prodListEl = productList.render();

    // renderHook.append(cartEl);
    // renderHook.append(prodListEl);
    // productList.render();
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

// const shop = new Shop();
// shop.render();

// console.log(new Product());
/*
const productList = {
  products: [
    new Product(
      "A pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxX33IKWDkRC4vIzLiGuH-DD8ucMPNEquEUum2sKJvQ&s=10",
      19.99,
      "A soft pillow",
    ),
    new Product(
      "A carpet",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18CtD2W24eeeLKKsz9sYSOjs7JdWWQezJ5ctvvUiONw&s=10",
      89.99,
      "A carpet which you might like - or not.",
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};
*/
