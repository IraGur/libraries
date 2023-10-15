const waypoint = new Waypoint({
   element: document.querySelector(".section-second"),
   handler: function (direction) {
      if (direction === "down") {
         alert(`Are you sure ? Things are wild down there`);
      }
   },
});

console.log(waypoint);
const waypoint2 = new Waypoint({
   element: document.querySelector(".section-second"),
   handler: function (direction) {
      if (direction === "up") {
         alert("I told you ! ");
      }
   },
});
