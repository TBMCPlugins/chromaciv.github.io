window.onload = function(){

  $("nav")
    .append($("<a></a>")
      .append("Main")
      .attr("href", "./index.html"))
    .append($("<a></a>")
      .append("Sandbox")
      .attr("href", "./sandbox.html"))
    .append($("<a></a>")
      .append("Map")
      .attr("href", "./map.html"))
    .append($("<a></a>")
      .append("Rules")
      .attr("href", "./rules.html"))
    .append($("<a></a>")
      .append("Questions")
      .attr("href", "./questions.html"))
    .append($("<a></a>")
      .append("Spawn")
      .attr("href", "./spawn.html"));


}
