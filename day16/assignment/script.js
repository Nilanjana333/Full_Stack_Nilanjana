let cart = JSON.parse(localStorage.getItem("DataCart")) || [];

function addToCart(el) {
    if (!cart.some(item => item.id === el.id)) {
        cart.push(el);
        localStorage.setItem("DataCart", JSON.stringify(cart));
        alert("Item added");
    } else {
        alert("Item already in cart");
    }
    getData();
}

function getData() {
    console.log(JSON.parse(localStorage.getItem("DataCart")));
}

function cartpage() {
    window.location.href = "cart.html";
}

// Product Listing
const productContainer = document.getElementById("products");
const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sort");
const filterSelect = document.getElementById("filter");
let products = [];

// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Display products dynamically
function displayProducts(productList) {
    productContainer.innerHTML = "";
    productList.forEach(product => {
        const productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = product.category;

        let img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        let title = document.createElement("p");
        title.innerText = product.title;

        let price = document.createElement("p");
        price.innerText = `$${product.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${product.rating.rate}`;

        let button = document.createElement("button");
        button.innerText = "View Details";
        button.addEventListener("click", () => viewProduct(product.id));

        productBox.append(heading, img, title, price, rating, button);
        productContainer.append(productBox);
    });
}

// Search function with debounce
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function searchProducts() {
    const query = searchBox.value.toLowerCase();
    const filteredData = products.filter(product => product.title.toLowerCase().includes(query));
    displayProducts(filteredData);
}

searchBox.addEventListener("input", debounce(searchProducts, 300));

// Sorting functionality
sortSelect.addEventListener("change", () => {
    let sortedProducts = [...products];
    if (sortSelect.value === "asc") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortSelect.value === "dsc") {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    displayProducts(sortedProducts);
});

// Filtering functionality
filterSelect.addEventListener("change", () => {
    const category = filterSelect.value;
    displayProducts(category === "select" ? products : products.filter(product => product.category.toLowerCase() === category.toLowerCase()));
});

// View Product Details
function viewProduct(productId) {
    localStorage.setItem("selectedProductId", productId);
    window.location.href = "product-detail.html";
}

// Fetch and display product details in product-detail.html
async function displayProductDetails() {
    const productId = localStorage.getItem("selectedProductId");
    if (!productId) return console.error("No product selected.");

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const { title, price, description, image } = await response.json();

        document.getElementById("product-name").textContent = title;
        document.getElementById("product-price").textContent = `$${price}`;
        document.getElementById("product-description").textContent = description;
        document.getElementById("product-image").src = image;
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}

// Run when on product-detail.html
if (window.location.pathname.includes("product-detail.html")) {
    displayProductDetails();
}

// Initialize product fetch
fetchProducts();
