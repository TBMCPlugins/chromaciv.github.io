
window.onload = function(){
  addScenario = function(scenario){

    let $liElement = $("<li id=\"scenarios-${scenario.name}\"></li>")

    if(scenario.adult == true){
      $adultText = $("<p class=\"adult\">(question for those over the age of 18... or those mature enough)</p>");
      $liElement.append($adultText);
    }
    $description = $("<p>" + scenario.description +"</p>");

    $options = $("<ul></ul>");
    for(option of scenario.options){
      $options.append($("<li>" + option + "</li>"));
    }
    $question = $("<p>" + scenario.question + "</p>");

    $input = $("<input type=\"text\" placeholder=\"Enter response here\">");


    $liElement.append($description);
    $liElement.append($options);
    $liElement.append($input);

    $("#scenarios").append($liElement);
  }

  $.getJSON("./resources/questions/scenarios.json", "", function(data){
    for(const scenario of data.scenarios){
      addScenario(scenario);
    }
  });
}
