// array holding all cars info
let mainArray = [
  {
    category: "Classic Cars",
    imgCar: "./project1cars/classic-cars/classic1.jpg",
    describe: `<h1>Classic Cars</h1>
    <p>A classic car is an older car, typically older than 20 years,
    The common theme is of an older car of sufficient historical interest to be
    collectible and worth preserving or restoring rather than scrapping.
    Classic cars are a subset of a broader category of "collector cars"
    (which includes both restored classic cars vehicles and newer exotic vehicles).
    A subset of what is considered classic cars are known as antique cars
    (manufactured before 1980) or vintage cars (manufactured pre-World War II.</p>`,
    imgM: "./project1cars/classic-cars/classicM.jpg",
  },
  {
    category: "Sports Cars",
    imgCar: "project1cars/sport-cars/sports1.jpg",
    describe: `<h1>Sports Cars</h1>
    <p>A sports car is a car designed with an emphasis on dynamic performance,
    such as handling, acceleration, top speed, or thrill of driving. Sports cars
    originated in Europe in the early 1900s and are currently produced by many
    manufacturers around the world.
    Definitions of sports cars often relate to how the car design is optimised for
    dynamic performance,[2][3] without any specific minimum requirements.</p>`,
    imgM: "project1cars/sport-cars/sportsM.jpg",
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
  },
];

const openCard = () => {
  $(".hidePage").hide();

};

// render function
const render = () => {
  //   $("cards").html("");
  mainArray.forEach((item, i) => {
    $("#cards").append(`<li class="card">
    <img id= "cardImg-${i}" src="${item.imgCar}" width="100%" />
    <p id= "cardCtg-${i}">${item.category}</p>
    <button id= "cardBtn-${i}">More Info</button></li>`);//end of append
    $("#cardBtn-"+i).click(()=> {openCard(i)});
  });
};

render();
