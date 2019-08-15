$(document).ready(function() {
  $("button").click(function() {
    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();

    if (side1 === "" || side2 === "" || side3 === "") {
      alert('Please select something. A triangle must have 3 sides');
    } else if (side1 === side2 && side1 === side3) {
      alert("Equilateral");
    } else if ((side1 === side2 && side1 !== side3) || (side2 === side3 && side2 !== side1) || (side1 === side3) && (side1 !== side2)) {
      alert("Isosceles");
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      alert('Scalene');
    }
  });
});
