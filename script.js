/* Casey Standing sprite image storage */
var x = document.querySelector("#cs0");

var y = document.querySelector("#cs1");
/* Setting up values*/
x.style.position = "absolute";

y.style.position = "absolute";
x.style.display = "inline";
y.style.display = "none";
x.style.left = "166px";
x.style.top = "56px";
y.style.left = "166px";
y.style.top = "56px";

/* Shredder standing sprite image storage*/
const shredderStanding = [
  document.querySelector("#ss0"),
  document.querySelector("#ss1"),
];
for (let k = 0; k < shredderStanding.length; k++) {
  shredderStanding[k].style.position = "absolute";
  shredderStanding[k].style.right = "133px";
  shredderStanding[k].style.top = "50px";
}
shredderStanding[0].style.display = "inline";
shredderStanding[1].style.display = "none";

/* Casey's standing animation control*/
var caseyStanding = setInterval(function () {
  if (y.style.display == "none") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    y.style.display = "none";
    x.style.display = "block";
  }
}, 400);

/* Shredder standing animation control*/
var standingShredder = setInterval(function () {
  if (shredderStanding[1].style.display == "none") {
    shredderStanding[0].style.display = "none";
    shredderStanding[1].style.display = "inline";
  } else {
    shredderStanding[1].style.display = "none";
    shredderStanding[0].style.display = "inline";
  }
}, 500);
