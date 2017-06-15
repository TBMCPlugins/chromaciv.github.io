
window.onload = function(){
  addScenario = function(object){
    $adultText = $("<p class=\"adult\">(question for those over the age of 18... or those mature enough)</p>");
    $description = $(
      "<p>One of your friends is upset. Someone has been harrassing them, asking"
      + "for innapropriate photos, constantly private messaging them without consent"
      + "<br><span class=\"aside\">(THEIR NAME IS FUCKING GIO)</span><br>"
      + "Your friend is visibly uncomfortable, would would be your first action?</p>");

    $options = $("<ul></ul>");
    $options.append($("<li>Try to listen to both sides, see what the other person has to say</li>"));
    $options.append($("<li>Go to the moderators, and report what happened.</li>"));
    $options.append($("<li>Try to cheer up your friend, diverting their attention to something else</li>"));
    $options.append($("<li>Listen to your friend, and reccommend some advice</li>"));
    $options.append($("<li>Other...</li>"));

    $question = $("<p>If this was happening to you, what would you choose instead?</p>")

    $input = $("<input type=\"text\" placeholder=\"Enter response here\">");

    $liElement = $("<li id=\"scenarios-harrassment\"></li>")
    $liElement.append($adultText);
    $liElement.append($description);
    $liElement.append($options);
    $liElement.append($input);
    console.table($liElement);

    $("#scenarios").append($liElement);
  }

};
