$(document).ready(function() {
  console.log("DOM ready");
  $("#show").click(function(event) {
    var flavorIds = ["flavor1", "flavor2", "flavor3"];
    var flavors = ["vanilla", "candy", "cotton-candy"];
    console.log("button pressed.");
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

    event.preventDefault();
  });
});
