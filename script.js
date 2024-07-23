// Function to fetch product details
function fetchProductDetails() {
    const DEMO_URL = "https://course-api.com/react-store-products";

    fetch(DEMO_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(products => {
            if (products.length > 0) {
                const product = products[0]; // Get the first product
                displayProductDetails(product);
            } else {
                console.log('No products found.');
            }
        })
        .catch(error => {
            console.error("Error fetching the product details:", error);
        });
}

// Function to display product details
function displayProductDetails(product) {
    console.log(`Product Name: ${product.name}`);
    console.log(`Description: ${product.description}`);
    console.log(`Price: $${product.price}`);
    console.log(`Image URL: ${product.image}`);
}

// Fetch and display product details
fetchProductDetails();
