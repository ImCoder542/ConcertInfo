fetch("data/products.json")
  .then(res => res.json())
  .then(products => {

    products.sort((a, b) => a.importance - b.importance);

    const container = document.getElementById("products");

    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <img src="${p.images[0]}">
        <div class="product-content">
          <h2>${p.name}</h2>
          <div class="price">${p.price} €</div>
          <a class="button" href="${p.link}">Подробнее</a>
        </div>
      `;

      container.appendChild(div);
    });
  });
