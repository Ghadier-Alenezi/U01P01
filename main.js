// array holding all cars info
let mainArray = [
  {
    category: "Classic Cars",
    imgCar: "./project1cars/classic-cars/classic1.jpg",
    describe: `<h1>Classic Cars</h1>
    <p>A classic car is an older car, typically older than 20 years,
    The common theme is of an older car of sufficient historical interest to be
    collectible and worth preserving or restoring rather than scrapping.
    Classic cars are a subset of a broader category of "collector cars"</p>`,
    imgM: "./project1cars/classic-cars/classicM.jpg",
    extraImg: [
      "./project1cars/classic-cars/classic2.jpg",
      "./project1cars/classic-cars/classic3.jpg",
      "./project1cars/classic-cars/classic4.jpg",
    ],
  },
  {
    category: "Sports Cars",
    imgCar: "project1cars/sport-cars/sports1.jpg",
    describe: `<h1>Sports Cars</h1>
    <p>A sports car is a car designed with an emphasis on dynamic performance,
    such as handling, acceleration, top speed, or thrill of driving. Sports cars
    originated in Europe in the early 1900s and are currently produced by many
    manufacturers around the world.</p>`,
    imgM: "project1cars/sport-cars/sportsM.jpg",
    extraImg: [
      "./project1cars/sport-cars/sports3.jpg",
      "./project1cars/sport-cars/sports4.jpg",
      "./project1cars/sport-cars/sports2.jpg",
    ],
  },
  {
    category: "Electric Cars",
    imgCar: "./project1cars/electric-cars/electric1.jpg",
    describe: `<h1>Electric Cars</h1>
    <p>An electric car or battery electric car is an automobile that is propelled by
    one or more electric motors, using energy stored in batteries. Compared to
    internal combustion engine (ICE) vehicles, electric cars are quieter, have no
    exhaust emissions, and lower emissions overall.</p>`,
    imgM: "./project1cars/electric-cars/electricM.jpg",
    extraImg: [
      "./project1cars/electric-cars/electric3.jpg",
      "./project1cars/electric-cars/electric2.jpg",
      "./project1cars/electric-cars/electric4.jpg",
    ],
  },
];

// render function
const render = () => {
  mainArray.forEach((item, i) => {
    $("#cards").append(`<div class="card">
    <div class ="crdImg"><img id= "cardImg-${i}" src="${item.imgCar}" width="100%" />
    </div>
    <div><p id= "cardCtg-${i}">${item.category}</p>
    </div>
    <div><button onclick='renderOneItem(${i})' id= "cardBtn-${i}">see more</button></div>
    </div>`);
  });
};
render();

// render item function
function renderOneItem(i) {
  $(".dynamicPage").hide();
  const myItem = mainArray[i];
  $(".descPage").append(`<div>
  <p class="cardDesc">${myItem.describe}</p>
  <div class="imgM"><img class="imgM-${i}" src="${myItem.imgM}" />
  </div>
     <div id='extraImges'></div>
     </div>`);
  myItem.extraImg.forEach((item, i) => {
    $("#extraImges").append(`<div>
       <img  src='${item}' /><div>`);
  });
}

// about us function
function renderAbouUs() {
  $(".dynamicPage").hide();
  $(".aboutUs").append(`<div>
<h1>WELCOME</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam excepturi earum sit dolorum harum, possimus exercitationem odit dicta soluta in. Non molestias dolorem, libero consequuntur repellat iusto fugit vel dolore!
</p>
</div>`);
};