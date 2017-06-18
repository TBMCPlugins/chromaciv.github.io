
window.onload = function(){
  makeScenario = function(scenario){

    //output element, that other elements are attached to
    let $trueOutputElement = $("<li></li>")
    $trueOutputElement.attr("id", `scenarios-${scenario.name}`);


    let $outputElement = $("<div class=\"accordion-panel\"></div>")
    //Determines whether this is a jQuery Accordion
    const isAccordion = true;
    if(isAccordion){
      $controlElement = $("<button></button>");
      $controlElement.addClass("accordion-control");
      $controlElement.append(scenario.name);
      $trueOutputElement.append($controlElement);
    }
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
      $inputTag.attr("name", `radio-${scenario.name}`);

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

    $trueOutputElement.append($outputElement);
    return $trueOutputElement;
  }

  $.getJSON("./resources/questions/scenarios.json", "", function(data){
    $accordionElement = $("#scenarios");
    $accordionElement.addClass("accordion")
    for(const scenario of data.scenarios){
      $accordionElement.append(makeScenario(scenario))
    }

    $(".accordion").on('click', '.accordion-control', function(e){
      e.preventDefault;
      $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
    });
  });

}
