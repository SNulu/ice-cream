$(document).ready(function() {
  $("#Cream").submit(function(event) {
    var flavorIds = ["flavor1", "flavor2", "flavor3"];
    var flavors = ["vanilla", "candy", "cotton-candy"];

    // 1. loop through flavors
    // console.log the flavor


    // 2. console.log flavor position `indexOf`
    // store it in variable position

    // 3. conlose.log flavorId of position

    flavors.forEach(function(flavor) {
      console.log(flavor);
      var position = flavors.indexOf(flavor);
      //debugger;
      // $("."+ flavorIds).text(userInput).val();
      // userInputes.push(userInput);

      // console.log(userInput);
      // $("." + thingsId).text(userInput).val();
    });

    // $("#story").show();
    event.preventDefault();
  });



});
