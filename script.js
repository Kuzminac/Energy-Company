const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector("#navigation");
let menuOpen = false;
let navOpen = false;
let navFullHeight = false;

// toggle menu
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navList.classList.add("open");
    nav.classList.add("full-height");
    menuOpen = true;
    navOpen = true;
    navFullHeight = true;
  } else {
    menuBtn.classList.remove("open");
    navList.classList.remove("open");
    nav.classList.remove("full-height");
    menuOpen = false;
    navOpen = false;
    navFullHeight = false;
  }
});

//  testimonials
const testimonials = [
  {
    id: 1,
    h4: "Vivamus venenatis ipsum at risus placerat, sit amet dapibus diam aliquam posuere cubilia curae.",
    img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    p: "Praesent Tempus",
    span: "Magnis dis parturient",
  },
  {
    id: 2,
    h4: "Sed dignissim placerat dolor id maxim. Nullam gravida bibendum ipsum, a consequat neque venenatis et.",
    img: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    p: "Marcus Aurelius",
    span: "Nunc faucibus eget",
  },
  {
    id: 3,
    h4: "Etiam mollis sit amet tellus ut accumsan. Donec sit amet lectus scelerisque, bibendum purus id, tristique felis.",
    img: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    p: "Orci varius natoque",
    span: "Alea acta est",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("person-name");
const review = document.getElementById("review");
const job = document.getElementById("person-job");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

//  set starting item
let currentItem = 0;

//  load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//  show review based on author
function showPerson(person) {
  const item = testimonials[person];
  job.textContent = item.span;
  img.src = item.img;
  author.textContent = item.p;
  review.textContent = item.h4;
}

//  show next person
nextArrow.addEventListener("click", function () {
  currentItem++;
  if (currentItem == testimonials.length - 1) {
    nextArrow.classList.add("locked");
    third.classList.add("active");
    second.classList.remove("active");
  } else if (currentItem == testimonials.length - 2) {
    second.classList.add("active");
    first.classList.remove("active");
  } else if (currentItem > testimonials.length - 1) {
    currentItem = 2;
    nextArrow.classList.add("locked");
  }
  if (currentItem != 0) {
    prevArrow.classList.remove("locked");
  }
  showPerson(currentItem);
});

//  show previous person
prevArrow.addEventListener("click", function () {
  currentItem--;
  if (currentItem == 0) {
    prevArrow.classList.add("locked");
    first.classList.add("active");
    second.classList.remove("active");
  } else if (currentItem == testimonials.length - 2) {
    third.classList.remove("active");
    second.classList.add("active");
  } else if (currentItem < 0) {
    currentItem = 0;
    prevArrow.classList.add("locked");
  }
  if (currentItem != testimonials.length - 1) {
    nextArrow.classList.remove("locked");
  }
  showPerson(currentItem);
});

//  Accordion
const showWater = document.getElementById("water");
const showGas = document.getElementById("gas");
const showElectricity = document.getElementById("electricity");
const showMetering = document.getElementById("metering");
const showEnergy = document.getElementById("energy");

//  paragraphs
const waterSub = document.getElementById("waterSub");
const gasSub = document.getElementById("gasSub");
const electricitySub = document.getElementById("electricitySub");
const meteringSub = document.getElementById("meteringSub");
const energySub = document.getElementById("energySub");

let waterActive = false;
let gasActive = false;
let electricityActive = false;
let meteringActive = false;
let energyActive = false;

showWater.addEventListener("click", function () {
  if (waterActive == true) {
    waterSub.classList.remove("active");
    showWater.innerHTML = "+";
    waterActive = false;
  } else {
    waterSub.classList.add("active");
    showWater.innerHTML = "-";
    waterActive = true;
  }
});

showGas.addEventListener("click", function () {
  if (gasActive == true) {
    gasSub.classList.remove("active");
    showGas.innerHTML = "+";
    gasActive = false;
  } else {
    gasSub.classList.add("active");
    showGas.innerHTML = "-";
    gasActive = true;
  }
});

showElectricity.addEventListener("click", function () {
  if (electricityActive == true) {
    electricitySub.classList.remove("active");
    showElectricity.innerHTML = "+";
    electricityActive = false;
  } else {
    electricitySub.classList.add("active");
    showElectricity.innerHTML = "-";
    electricityActive = true;
  }
});

showMetering.addEventListener("click", function () {
  if (meteringActive == true) {
    meteringSub.classList.remove("active");
    showMetering.innerHTML = "+";
    meteringActive = false;
  } else {
    meteringSub.classList.add("active");
    showMetering.innerHTML = "-";
    meteringActive = true;
  }
});

showEnergy.addEventListener("click", function () {
  if (energyActive == true) {
    energySub.classList.remove("active");
    showEnergy.innerHTML = "+";
    energyActive = false;
  } else {
    energySub.classList.add("active");
    showEnergy.innerHTML = "-";
    energyActive = true;
  }
});
