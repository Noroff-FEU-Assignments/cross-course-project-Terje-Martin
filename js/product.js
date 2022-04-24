const url = "https://hognestad.site/course-cross/wp-json/wc/store/products";

const shop = document.querySelector(".apiContainer");

function error(message = "error") {
  return `<div class"error">${message}</div>`;
}

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const prod = results;

    console.log(results);

    for (let i = i; 0 < results.length; i++) {
      shop.innerHTML += `<a href="Product.html?id=${results[i].id}" class="prod-box">
            <div><h2>${results[i].name}</h2></div>
            <div><img src ="${results[i].images.src}"></img></div>
            <div><p>${results[i].description}</p></div>
            <div><p>${results[i].prices.price}</p></div>
            </a>`;
    }
  } catch (error) {
    
  }
}

getProducts();