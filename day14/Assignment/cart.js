let DataCart = JSON.parse(localStorage.getItem("DataCart")) || [];

function showCartData(Arr) {
    document.getElementById("products").innerHTML = "";
    Arr.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = `$${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating}`;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
            deleteFun(index);
        });

        productBox.append(heading, img, name, price, rating, button);
        document.getElementById("products").append(productBox);
    });
}

// Initial display of cart items
showCartData(DataCart);

// Debounce function to optimize search
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to filter and display cart search results
function searchCartProducts() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let filteredData = DataCart.filter(el => el.name.toLowerCase().includes(query));
    showCartData(filteredData);
}

// Attach the debounced search function to input event
document.getElementById("searchBox").addEventListener("input", debounce(searchCartProducts, 500));

// Function to delete an item from the cart
function deleteFun(index) {
    let deletedCartData = JSON.parse(localStorage.getItem("DataCart")) || [];
    deletedCartData.splice(index, 1);
    localStorage.setItem("DataCart", JSON.stringify(deletedCartData));
    DataCart = deletedCartData;
    showCartData(deletedCartData);
}
