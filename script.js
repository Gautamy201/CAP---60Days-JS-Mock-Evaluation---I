const productAPI = "https://fakestoreapi.com/products";

async function fetchProductsAPI() {
  try {
    const response = await fetch(productAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("api not working plse check", error);
  }
}
// all product show on display function
const displayProductContainer = document.querySelector(
  ".display_products_container"
);
fetchProductsAPI().then((data) => {
  data.map((product) => {
    displayProduct(product);
  });
});

// filter by cotargary product show on display function
const category = document.getElementById("serchByCategory");

category.onchange = function () {
  displayProductContainer.innerHTML = " ";
  fetchProductsAPI().then((data) => {
    data.map((product) => {
      if (product.category === this.value) {
        displayProduct(product);
      }
      if (this.value === "all") {
        displayProduct(product);
      }
    });
  });
};
// shot by low to high and heigh to low  product show on display function
const shortByPrice = document.getElementById("shortByPrice");

shortByPrice.onchange = function () {
  displayProductContainer.innerHTML = " ";
  fetchProductsAPI().then((data) => {
    if ("assending" === this.value) {
      data.sort(function (a, b) {
        return a.price - b.price;
      });
      data.map((product) => {
        displayProduct(product);
      });
    } else if ("dessending" === this.value) {
      data.sort(function (a, b) {
        return a.price - b.price;
      });
      data.reverse().map((product) => {
        displayProduct(product);
      });
    }
  });
};
// serch by  product show on display function
const serchByInput = document.querySelector(".serch_container input");

serchByInput.addEventListener("change", () => {
  displayProductContainer.innerHTML = " ";
  fetchProductsAPI().then((data) => {
    data.map((product) => {
      if (product.category === serchByInput.value) {
        displayProduct(product);
      }
      if (serchByInput.value !== product.category) {
      }
    });
  });
});
// create display output function
function displayProduct(product) {
  displayProductContainer.innerHTML += `<div class="product_container">
          <div class="product_img">
            <img src="${product.image}" alt="" width="80%" height="90%">
          </div>
          <div class="product_title">
            <p> ${product.title}</p>
          </div>
          <div class="product_price">
            <p><strong>Price : </strong>${product.price} $</p>
          </div>
        </div>`;
}
