import { Card } from "../component/Card.js";

let renderCard = document.querySelector("#renderCard");

const BaseUrl = "http://127.0.0.1:5501/data/products.json";

fetch(BaseUrl)
  .then((smos) => smos.json())
  .then((data) => {
    let products = data.products;
    products.map((product) => (renderCard.innerHTML += Card(product)));
  });
