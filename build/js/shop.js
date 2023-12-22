let storageArray = JSON.parse(localStorage.getItem('cartItems')) || [];
function CartItemsFunction  () {
    const totaCart = document.getElementById('totaCart');
    const totalPrice = document.getElementById('totalPrice');
    if (storageArray.length !== 0) {
        let addToTotalCart = storageArray.map((quantity) => quantity.quantity).reduce((acc,cur) => acc + cur);
        let addTotalPrice = storageArray.map((el) => el.quantity * el.productPrice).reduce((acc,cur) => acc + cur);
        totaCart.innerText = addToTotalCart;
        totalPrice.innerText = `$${addTotalPrice.toFixed(2)}`;
    }else {
        totaCart.innerText = 0;
        totalPrice.innerText = 0;
    }
    // Retrieve cart items from local storage
    // Reference to the div where you want to display the cart items
    const shoppingCartSidebar = document.getElementById('shoppingCartSidebar');
    // Clear the existing content in the container
    shoppingCartSidebar.innerHTML = '';
    storageArray.forEach(el => {
        const { img, productName, productPrice, quantity, id } = el;
        const totalProductPrice = (productPrice * quantity).toFixed(2);
        shoppingCartSidebar.appendChild(createCartItemElement(img, productName, totalProductPrice, quantity, id))
    })
}

document.addEventListener('DOMContentLoaded', async function () {
    const cartAside = document.getElementById('cart-aside');
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const container = document.getElementById("productsContainer");
    const categoryFilter = document.getElementById("categoryFilter");
    const productTypeFilter = document.getElementById("productType");
    /* ==========function to get back what is localStorage and add it to cart============*/


    CartItemsFunction()
    /* ==========function to get back what is localStorage and add it to cart============*/

    /*=========================ShopSideCart==========================*/
    openCartBtn.addEventListener('click', function () {
        cartAside.classList.remove('clshidden');
    });

    closeCartBtn.addEventListener('click', function () {
        cartAside.classList.add('clshidden');
    });
    /*=========================ShopSideCart==========================*/

    /*=========================Fetch Data================================*/
    try {
        const response = await fetch('js/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();
    /*--------------------------add data to products page-----------------------*/ 
        const uniqueCategories = ['all', ...new Set(products.map(product => product.categories.main))];
        uniqueCategories.forEach(category => {
            // Create a button for each category
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category;
            categoryButton.classList.add('category-btn');
    
            categoryButton.addEventListener('click', function () {
                filterProducts(category); // Assuming 'all' for productType, you can modify as needed
            });
            categoryFilter.appendChild(categoryButton);
        });

        // Function to filter products based on category and product type
        function filterProducts(category) {
            container.innerHTML = ''; // Clear existing products
            // Filter and display products based on the selected category and product type
            const filteredProducts = products.filter(product =>
                (category === 'all' || product.categories.main === category)
            );
            filteredProducts.forEach((el) => {
                const { title, price, img, star, id } = el;
                container.appendChild(createProductCard(img, title, star, price, id));
            });
        }
    
        // Initial display of all products
        filterProducts('all', 'all');
    
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
    
});

// Function when click on " addToCartButton " add the cart is clicked to the array
function addToCart(productImg, productName, productPrice, buttonDataset) {
    // Check if the product is already in the cart
    const existingCartItem = storageArray.find(item => item.id === buttonDataset);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        const newCartItem = {
            img: productImg,
            productName: productName,
            productPrice: productPrice,
            id: buttonDataset,
            quantity: 1,
        };
        storageArray.push(newCartItem);
    }
    localStorage.setItem('cartItems', JSON.stringify(storageArray));
}


// Function to remove item from storageArray by ID
function removeFromCart(id) {
    storageArray = storageArray.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(storageArray)); // Update localStorage
    CartItemsFunction(); // Update cart items dynamically
}

// Function to increase product amount
function increaseProductAmount(id) {
    const item = storageArray.find(item => item.id === id);
    if (item) {
        item.quantity++;
        localStorage.setItem('cartItems', JSON.stringify(storageArray));
        CartItemsFunction(); // Update cart items dynamically
    }
}

// Function to decrease product amount
function decreaseProductAmount(id) {
    const item = storageArray.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('cartItems', JSON.stringify(storageArray));
        CartItemsFunction(); // Update cart items dynamically
    }
}
// --------------------------------DOM Manuplation Functions---------------------------------
// --------------------------------DOM Manuplation Functions---------------------------------
// --------------------------------DOM Manuplation Functions---------------------------------
// Function to loop on data after fetching it in page
function createCartItemElement(productImage, productName, productPrice, productAmount, id) {
    // Create the main container div
    const cartItemDiv = document.createElement('div');
    cartItemDiv.id = id;
    cartItemDiv.classList.add('cart-item');

    // Create the div for image element
    const imgDiv = document.createElement('dive');
    imgDiv.classList.add('image')

    // Create the image element
    const imgElement = document.createElement('img');
    imgElement.src = productImage;
    imgElement.alt = productName;

    // Create the first inner div
    const firstInnerDiv = document.createElement('div');
    firstInnerDiv.classList.add('about-cart-item')

    // Create the heading element
    const headingElement = document.createElement('h4');
    headingElement.classList.add('cart-item-name');
    headingElement.textContent = `${productName.slice(0, 18)}.`;

    // Create the price element
    const priceElement = document.createElement('p');
    priceElement.classList.add('cart-item-price');
    priceElement.textContent = `$${productPrice}`;

    // ======================Remove BTN===========================
    // Create the remove button and its function
    const removeButton = document.createElement('button');
    removeButton.classList.add('cart-item-remove-btn');
    removeButton.textContent = 'remove';
    removeButton.onclick = function () {
        removeFromCart(id);
    };
    // ======================Remove BTN===========================

    // Append heading, price, and remove button to the first inner div
    firstInnerDiv.appendChild(headingElement);
    firstInnerDiv.appendChild(priceElement);
    firstInnerDiv.appendChild(removeButton);

    // Create the second inner div
    const secondInnerDiv = document.createElement('div');

    // =================Increase BTN=======================
    // Create the increase button and its function
    const increaseButton = document.createElement('button');
    increaseButton.classList.add('cart-item-increase-btn');
    const increaseIcon = document.createElement('i');
    increaseIcon.classList.add('fas', 'fa-chevron-up');
    increaseButton.appendChild(increaseIcon);
    increaseButton.onclick = function () {
        increaseProductAmount(id);
    };
    // =================Increase BTN=======================
    
    // Create the amount element
    const amountElement = document.createElement('p');
    amountElement.classList.add('cart-item-amount');
    amountElement.textContent = productAmount;
    
    // =================Decrease BTN=======================
    // Create the decrease button and its function
    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('cart-item-decrease-btn');
    const decreaseIcon = document.createElement('i');
    decreaseIcon.classList.add('fas', 'fa-chevron-down');
    decreaseButton.appendChild(decreaseIcon);
    decreaseButton.onclick = function () {
        decreaseProductAmount(id);
    };
    // =================Decrease BTN=======================

    // Append increase button, amount, and decrease button to the second inner div
    secondInnerDiv.appendChild(increaseButton);
    secondInnerDiv.appendChild(amountElement);
    secondInnerDiv.appendChild(decreaseButton);

    // Append image, first inner div, and second inner div to the main container div
    imgDiv.appendChild(imgElement);
    cartItemDiv.appendChild(imgDiv);
    cartItemDiv.appendChild(firstInnerDiv);
    cartItemDiv.appendChild(secondInnerDiv);

    // Return the created HTML structure
    return cartItemDiv;
}

// Function to create a product card with details
function createProductCard(imgSrc, productName, productStar, productPrice, id) {
    // Create the main card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the container for the product image
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("flex", "flex-col", "justify-center", "items-center", "flex-1");

    // Create the div for the product image
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    // Create the product image element
    const image = document.createElement("img");
    image.src = imgSrc;
    image.alt = productName;

    // Append the image to its container
    imageDiv.appendChild(image);
    imageContainer.appendChild(imageDiv);
    card.appendChild(imageContainer);

    // Create the container for product details
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("p-5", "relative");

    // Create the product label container
    const productLabel = document.createElement("div");
    productLabel.classList.add("product-label");

    // Create elements for product name, star rating, and price
    const productNameElement = document.createElement("span");
    productNameElement.title = productName;
    productNameElement.classList.add("product-name");
    productNameElement.textContent = productName;

    const starIcon = document.createElement("i");
    starIcon.classList.add("text-[#ffd700]", "fa-solid", "fa-star", "mr-2");
    const productStarElement = document.createElement("span");
    productStarElement.classList.add("product-star");
    productStarElement.textContent = productStar;

    const productPriceElement = document.createElement("strong");
    productPriceElement.classList.add("product-price", "text-xl");
    productPriceElement.textContent = `$${productPrice}`;

    // Append product details to the product label container
    productLabel.append(productNameElement, starIcon, productStarElement, document.createElement("br"), productPriceElement);

    // Create the caption container for the "Add to Cart" button
    const caption = document.createElement("div");
    caption.classList.add("caption", "bg-white", "z-50", "absolute", "bottom-0", "left-0", "w-full", "flex", "justify-evenly", "items-center");

    // Create the "Add to Cart" button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add To Cart";
    addToCartButton.dataset.productId = id;

    // Create the cart icon for the button
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fa-solid", "fa-cart-shopping", "ml-2");
    addToCartButton.appendChild(cartIcon);

    // Event listener for the "Add to Cart" button
    addToCartButton.addEventListener('click', function () {
        // Retrieve the product ID from the button's dataset
        let buttonDataset = this.dataset.productId;
        addToCart(imgSrc, productName, productPrice, buttonDataset)
        CartItemsFunction()
    });

    // Append the "Add to Cart" button to the caption container
    caption.appendChild(addToCartButton);

    // Append product details and caption to the main card container
    contentContainer.append(productLabel, caption);
    card.appendChild(contentContainer);

    // Return the created product card
    return card;
}

























