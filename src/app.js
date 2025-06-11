import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who =['The dog','My grandma','The mailman','My bird'];
let action =['ate','peed','crushed','broke'];
let what=['my homework','my phone','the car'];
let when=['before the class','when i was sleeping','while i was exercising','during my lunch','while i was praying'];
  

let whorandom = who[Math.floor(Math.random()*who.length)];
let actionrandom = action[Math.floor(Math.random()*action.length)];
let whatrandom = what[Math.floor(Math.random()*what.length)];
let whenrandom = when[Math.floor(Math.random()*when.length)];

let random_excuse = whorandom+" "+actionrandom+ " " +whatrandom+ " " +whenrandom;

document.getElementById("excuse").innerText=random_excuse;

  console.log("Hello Rigo from the console!");
};
