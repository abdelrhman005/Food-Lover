let menuItems = [
  {
    name: "LASAL CHEESE",
    price: "$18.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food1.png"
  },
  {
    name: "JUMBO CRAB SHRIMP",
    price: "$38.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food2.png"
  },
  {
    name: "KOKTAIL JUCIE",
    price: "$8.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food3.png"
  },
  {
    name: "CAPO STEAK",
    price: "$40.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food4.png"
  },
  {
    name: "DONUTS",
    price: "$13.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food5.png"
  },
  {
    name: "CHEESE PIZZA",
    price: "$40.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food6.png"
  },
  {
    name: "KOFTA MEAT",
    price: "$20.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia، necessitatibus!",
    image: "./images/food7.jpeg"
  },
  {
    name: "SPANISH PIES",
    price: "$18.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food8.jpeg"
  },
  {
    name: "CHEESE TOST",
    price: "$10.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food9.jpeg"
  },
  {
    name: "FRUIT SALAD",
    price: "$18.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food10.jpeg"
  },
  {
    name: "CHICKEN SHAWARMA",
    price: "$48.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food11.jpeg"
  },
  {
    name: "MEGA CHEESE PIZZA",
    price: "$28.00",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, necessitatibus!",
    image: "./images/food12.jpeg"
  }
];

let container = document.querySelector(".card-continer");

for (let i = 0; i < menuItems.length; i++) {
  let item = menuItems[i];

  container.innerHTML += `
    <div class="card">
      <img src="${item.image}" alt="">
      <div class="card-text">
        <h2>${item.name} <span>${item.price}</span></h2>
        <hr>
        <p>${item.description}</p>
      </div>
    </div>
  `;
}
