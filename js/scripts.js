$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#add1").val());
    var side2 = parseInt($("#add2").val());
    var side3 = parseInt($("#add3").val());

    if ((side1 === side2) && (side1 === side3) && (side2 === side3)) {
      $(".equilateral").show();
      $(".isosceles").hide();
      $(".scalene").hide();
      $(".not-a-triangle").hide();
    };

    if (((side1 === side2) && (side1 > side3) && (side2 > side3)) || ((side1 === side3) && (side1 > side2) && (side3 > side2)) || ((side2 === side3) && (side2 > side1) && (side3 > side1))) {
      $(".equilateral").hide();
      $(".isosceles").show();
      $(".scalene").hide();
      $(".not-a-triangle").hide();
    };

    if (((side1 > side2) && (side2 > side3) && (side1 > side3)) || ((side2 > side1) && (side3 > side1) && (side2 > side3)) || ((side1 > side2) && (side3 > side2) && (side1 > side3)) || ((side3 > side1) && (side3 > side2) && (side2 > side1)) || ((side3 > side1) && (side3 > side2) && (side1 > side2)) || ((side2 > side1) && (side2 > side3) && (side1 > side3))) {
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").show();
      $(".not-a-triangle").hide();
    };

    if (((side1 === side2) && (side3 > side1) && (side3 > side2)) || ((side1 === side3) && (side2 > side1) && (side2 > side3)) || ((side2 === side3) && (side1 > side2) && (side1 > side3)) || ((side1 === 0) || (side2 === 0) || (side3 === 0))) {
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").hide();
      $(".not-a-triangle").show();
    };
  });
});
