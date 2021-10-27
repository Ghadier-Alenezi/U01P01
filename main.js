// array holding all cars info
let mainArray = JSON.parse(localStorage.getItem("mainArray")) || [
  {
    name: "Jaguar E-Type",
    imgCar: "./project1cars/Jaguar E-Type/1.png",
    describe: `<h1>Jaguar E-Type</h1>
    <p>Once called "the most beautiful car ever made" by Enzo Ferrari, 
    the 1960s Jaguar E-Type is a classic sports car mainstay. 
    "If you only choose one car from this list to drive, this is the one," 
    says McKeel Hagerty, CEO of Hagerty, the world's largest provider of 
    collector vehicle insurance. This staple of British motoring history 
    still has verve–it can perform up to 150 m.p.h. and brakes better than 
    most cars from its era.</p>`,
    imgM: "./project1cars/Jaguar E-Type/1.png",
    extraImg: [
      "./project1cars/Jaguar E-Type/2.png",
      "./project1cars/Jaguar E-Type/3.png",
      "./project1cars/Jaguar E-Type/4.png",
    ],
    isFav: false,
  },
  {
    name: "Aston Martin DB4",
    imgCar: "./project1cars/Aston Martin DB4/1.png",
    describe: `<h1>Aston Martin DB4</h1>
    <p>The precursor to James Bond's getaway car, the Aston Martin DB4 is 
    an iconic workhorse. "The DB4 is a thoroughbred that never gets 
    flustered," Hagerty says. "I wouldn't hesitate to drive one across 
    the country. It's no wonder that James Bond favored the derivative DB5." 
    They're in short supply, so if you want to drive one, your best bet may 
    be to befriend a collector.</p>`,
    imgM: "./project1cars/Aston Martin DB4/1.png",
    extraImg: [
      "./project1cars/Aston Martin DB4/2.png",
      "./project1cars/Aston Martin DB4/3.png",
      "./project1cars/Aston Martin DB4/4.png",
    ],
    isFav: false,
  },

  {
    name: "VW Beetle",
    imgCar: "./project1cars/VW Beetle/1.png",
    describe: `<h1>VW Beetle</h1>
    <p>A counter-culture classic, the vintage VW Beetle represents simplicity 
    and fun–in other words, motoring at its best. "Besides the easy driving 
    experience, the Beetle's friendly exterior attracts people no matter 
    where you're driving, and it seems everyone has their own Beetle story 
    to share," Hagerty says. "This is not the car to buy if you're shy."</p>`,
    imgM: "./project1cars/VW Beetle/1.png",
    extraImg: [
      "./project1cars/VW Beetle/2.png",
      "./project1cars/VW Beetle/3.png",
      "./project1cars/VW Beetle/4.png",
    ],
    isFav: false,
  },
  {
    name: "Mercedes SL 300 Gullwing",
    imgCar: "./project1cars/Mercedes SL 300 Gullwing/1.png",
    describe: `<h1>Mercedes SL 300 Gullwing</h1>
    <p>Among the first sports cars of the post-war era, the Mercedes SL 300 
    Gullwing was the fastest production car of its time when it was 
    introduced in 1954. As the first direct fuel injection series production 
    car, the SL 300 could travel at an eye-popping 160 miles per hour. 
    "Nobody expected something like that from Mercedes," says Constantin von 
    Kageneck, a specialist in classic car marketing at the Mercedes-Benz 
    Classic Center in Irvine, CA. Though about three-quarters of the 
    original SL 300's survive today, many still belong to their original 
    owners.</p>`,
    imgM: "./project1cars/Mercedes SL 300 Gullwing/1.png",
    extraImg: [
      "./project1cars/Mercedes SL 300 Gullwing/2.png",
      "./project1cars/Mercedes SL 300 Gullwing/3.png",
      "./project1cars/Mercedes SL 300 Gullwing/4.png",
    ],
    isFav: false,
  },
  {
    name: "Volvo P1800",
    imgCar: "./project1cars/Volvo P1800/1.png",
    describe: `<h1>Volvo P1800</h1>
    <p>The quirky Volvo P1800 was stylish enough for Roger Moore to drive 
    one in the spy thriller TV series The Saint. This two-seater sports car 
    is durable: one surviving model has clocked more than three million miles.</p>`,
    imgM: "./project1cars/Volvo P1800/1.png",
    extraImg: [
      "./project1cars/Volvo P1800/2.png",
      "./project1cars/Volvo P1800/3.png",
      "./project1cars/Volvo P1800/4.png",
    ],
    isFav: false,
  },
  {
    name: "Austin-Healey 3000",
    imgCar: "./project1cars/Austin-Healey 3000/1.png",
    describe: `<h1>Austin-Healey 3000</h1>
    <p>Introduced in 1959, the bulbous British roadster became the last of 
    the "big Healeys" when it ended production in 1967. Curvaceous and brass,
     the Austin-Healey 3000 was an automotive icon of the Swinging Sixties. 
     "This was the final version of the 'Big Healey,' 
     with its powerful six-cylinder engine and overdrive," Martin says. 
     "It will cruise easily at 75 mph on today's freeways."</p>`,
    imgM: "./project1cars/Austin-Healey 3000/1.png",
    extraImg: [
      "./project1cars/Austin-Healey 3000/2.png",
      "./project1cars/Austin-Healey 3000/3.png",
      "./project1cars/Austin-Healey 3000/4.png",
    ],
    isFav: false,
  },
];

localStorage.setItem("mainArray", JSON.stringify(mainArray));

// render function
const render = () => {
  $("#cards").html("");
  mainArray.forEach((item, i) => {
    $("#cards").append(`<div class="card">
    <div class ="imgContainer"><img id= "cardImg-${i}" width= "300px" src="${
      item.imgCar
    }"/>
    </div>
    <div><h3 id= "cardName-${i}">${item.name}</h3>
    </div>
    <div><button onclick='renderOneItem(${i})' id= "cardBtn-${i}">see more</button></div>
    <div><button onclick='favCar(${i})'id= "favBtn-${i}">${
      item.isFav ? "remove from favorite" : "add to favorite"
    }</div>
    </div>`);
  });
};
render();

// render item function
function renderOneItem(i) {
  $(".dynamicPage").hide();
  $(".favoriteP").hide();
  $(".aboutUs").hide();
  const myItem = mainArray[i];
  $(".descPage").append(`<div>
  <p class="cardDesc">${myItem.describe}</p>
     <div id='extraImges'></div>
     </div>`);
  myItem.extraImg.forEach((item, i) => {
    $("#extraImges").append(`<div>
       <img src='${item}'
       width ="300px" hight="300px"/><div>`);
  });
};

// about function
function renderAbout() {
  $(".dynamicPage").hide();
  $(".descPage").hide();
  $(".favoriteP").hide();
  $(".aboutUs").append(`<div class ="aboutUsStory">
<h3>About Classic Cars</h3>
<p>OWNER OF THE COMPNY</p>
<p>He was passion for motorcars started young, a 10-year-old reaching for the pedals of some of the finest cars at his father’s garage. At 18 his enthusiasm spilled on to the race track where enjoyed success competing in single seaters and saloon cars.</p>

<p>His apprenticeship was also served at HR Owen and he went on to work in management with one of the UK’s leading prestige motor dealer groups.</p>

<p>In 2011, with a desire to participate in the sports and classic car market again, He returned to his roots to work at the showroom as he had done many years before.</p>
</div>`);
};

//fav function

function favCar(i) {
  mainArray[i].isFav = !mainArray[i].isFav;
  localStorage.setItem("mainArray", JSON.stringify(mainArray));
  render();
  $(".dynamicPage").hide();
  $(".descPage").hide();
  $(".aboutUs").hide();
  $(".favoriteP").append(`<h1></h1>
  `)

};

$(".favoriteP").append
//search function
