let res = document.querySelector(".a1");
let res2 = document.querySelector(".a2");

let resh1 = document.querySelector("h1");
let resp = document.querySelector("p");
let resw = document.querySelector(".wrapper");
let resm = document.querySelector(".menu");
let resb1 = document.querySelector(".b1");
let resb2 = document.querySelector(".b2");
let resb3 = document.querySelector(".b3");

res.addEventListener("click", function () {
  resh1.style.color = "red";
  resp.style.color = "blue";
  resb1.style.color = "white";
  resb2.style.color = "white";
  resb3.style.color = "white";
  resw.style.backgroundColor = "black";
  resm.style.backgroundColor = "white";
});

res2.addEventListener("click", function () {
  resh1.style.color = "white";
  resp.style.color = "red";
  resb1.style.color = "chocolate";
  resb2.style.color = "chocolate";
  resb3.style.color = "chocolate";
  resw.style.backgroundColor = "aqua";
  resm.style.backgroundColor = "gold";
});
