
window.onload = function(){
  addScenario = function(scenario){

    let $liElement = $("<li id=\"scenarios-"+scenario.name+"\"></li>")

    if(scenario.adult == true){
      $adultText = $("<p class=\"adult\">(question for those over the age of 18... or those mature enough)</p>");
      $liElement.append($adultText);
    }
    $description = $("<p>" + scenario.description +"</p>");

    $options = $("<ul></ul>");
    for(option of scenario.options){
      $options.append($("<li><input type=\"radio\" name=\"radio-"+scenario.name+"\">" + option + "</radio></li>"));
    }
    if (scenario.other){
      $options.append("<li>Other... <input type=text></li>");
    }

    $why = $("<p>Why would you choose this awnser?</p>");
    $whyResponse = $("<textArea placeholder=\"Enter response here\"></textArea>")

    $liElement.append($description);
    $liElement.append($options);
    $liElement.append($why);
    $liElement.append($whyResponse);

    if(scenario.question){
      $question = $("<p>" + scenario.question + "</p>");
      $questionResponse = $("<textArea placeholder=\"Enter response here\"></textArea>")
      $liElement.append($question);
      $liElement.append($questionResponse);
    }

    $("#scenarios").append($liElement);
  }

  $.getJSON("./resources/questions/scenarios.json", "", function(data){
    for(const scenario of data.scenarios){
      addScenario(scenario);
    }
  });
}
