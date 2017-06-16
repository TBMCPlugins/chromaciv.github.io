
window.onload = function(){
  makeScenario = function(scenario){

    //output element, that other elements are attached to
    let $outputElement = $("<li></li>")
    $outputElement.attr("id", "scenarios-"+scenario.name);

    //Mature Content rating
    if(scenario.adult == true){
      $adultText = $("<p>(question for those over the age of 18... or those mature enough)</p>");
      $adultText.addClass("adult");

      $outputElement.append($adultText);
      $outputElement.addClass("adult-scenario");
    }

    //description
    $descriptionElement = $("<p>" + scenario.description +"</p>");

    //option list
    $optionElement = $("<ul></ul>");
    for(option of scenario.options){
      //Create radio button
      $inputTag = $("<input>");
      $inputTag.attr("type", "radio");
      $inputTag.attr("name", "radio-"+scenario.name);

      //Populate list element
      $newOption = $("<li></li>");
      $newOption.append($inputTag);
      $newOption.append(option);
      $optionElement.append($newOption);

    }
    //Other Question
    if (scenario.other){
      $otherElement = $("<li>Other... <input type=text></li>");
      $optionElement.append($otherElement);
    }

    //Default question, always shows up
    $whyElement = $("<p>Why would you choose this awnser?</p>");

    //Awnser space for the default element
    $whyResponseElement = $("<textArea></textArea>")
    $whyResponseElement.attr("placeholder", "Enter response here");

    //Populate outputElement
    $outputElement.append($descriptionElement);
    $outputElement.append($optionElement);
    $outputElement.append($whyElement);
    $outputElement.append($whyResponseElement);

    //Extra Question
    if(scenario.question){
      $question = $("<p>" + scenario.question + "</p>");
      $questionResponse = $("<textArea></textArea>");
      $questionResponse.attr("placeholder", "Enter response here");

      $outputElement.append($question);
      $outputElement.append($questionResponse);
    }

    //Submission button
    $submitElement = $("<input>");
    $submitElement.attr("type", "submit");
    $submitElement.append("Submit");
    $outputElement.append($("<br /><br />"));
    $outputElement.append($submitElement);

    return $outputElement;
  }

  $.getJSON("./resources/questions/scenarios.json", "", function(data){
    for(const scenario of data.scenarios){
      $("#scenarios").append(makeScenario(scenario));
    }
  });
}
