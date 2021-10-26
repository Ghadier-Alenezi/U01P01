// array holding all cars info
let mainArray = [
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
      "./project1cars/Jaguar E-Type/2.png" ,
      "./project1cars/Jaguar E-Type/3.png" ,
      "./project1cars/Jaguar E-Type/4.png" ,
    ],
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
  },
];

// render function
const render = () => {
  mainArray.forEach((item, i) => {
    $("#cards").append(`<div class="card">
    <div class ="crdImg"><img id= "cardImg-${i}" src="${item.imgCar}"/>
    </div>
    <div><p id= "cardCtg-${i}">${item.name}</p>
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
       <img src='${item}' /><div>`);
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


//fav function

//search function
