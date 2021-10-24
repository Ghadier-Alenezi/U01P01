// array holding all cars info
let mainArray = [
  {
    category: "Classic Cars",
    imgCar: "./project1cars/classic-cars/classic1.jpg",
    describe: "Lorem1",
  },
  {
    category: "Sports Cars",
    imgCar: "project1cars/sport-cars/sports1.jpg",
    describe: "Lorem1",
  },
  {
    category: "Electric Cars",
    imgCar: "./project1cars/electric-cars/electric1.jpg",
    describe: "Lorem1",
  },
];
// render function
const render = () => {
  //   $("cards").html("");
  mainArray.forEach((item, i) => {
    $("#cards").append(`<li class="card">
    <img id="cardImg -${i}" src="${item.imgCar}" width="100%" />
    <p id="cardDesc -${i}">${item.category}</p>
    <button id=cardBtn -${i}>More Info</button>
  </li>`);
  });
};
render();
