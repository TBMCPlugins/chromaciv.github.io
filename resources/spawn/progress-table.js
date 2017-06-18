window.onload = function(){
  function addRow(building){
    $nameElement = $("<td></td>")
    $nameElement.attr("id", building.id + "-progress.name")
    $nameElement.append(building.name);

    $useElement = $("<td></td>");
    $useElement.attr("id", building.id + "-progress.use");
    $useElement.append(building.use)

    $designedElement = $("<td></td>");
    $designedElement.attr("id", building.id + "-progress.designed");
    $designedElement.addClass("checkboxCell");
    $designedElement.append(
        $("<input>")
          .attr("type", "checkbox")
          .attr("id", building.id + ".designed?")
          .attr("checked", building.designed))f;

    $startedElement = $("<td></td>");
    $startedElement.attr("id", building.id + "-progress.stated");
    $startedElement.addClass("checkboxCell");
    $startedElement.append(
        $("<input>")
          .attr("type", "checkbox")
          .attr("id", building.id + ".started?")
          .attr("checked", building.started));

    $completedElement = $("<td></td>");
    $completedElement.attr("id", building.id + "-progress.completed");
    $completedElement.addClass("checkboxCell");
    $completedElement.append(
      $("<input>")
        .attr("type", "checkbox")
        .attr("id", building.id + ".completed?")
        .attr("checked", building.completed));

    $populatedElement = $("<td></td>");
    $populatedElement.attr("id", building.id + "-progress.populated");
    $populatedElement.addClass("checkboxCell");
    $populatedElement.append(
      $("<input>")
        .attr("type", "checkbox")
        .attr("id", building.id + ".populated?")
        .attr("checked", building.populated));


    $outputRow = $("<tr></tr>");
    $outputRow.attr("id", building.id + "-progress");
    $outputRow.append($nameElement);
    $outputRow.append($useElement);
    $outputRow.append($designedElement);
    $outputRow.append($startedElement);
    $outputRow.append($completedElement);
    $outputRow.append($populatedElement);
    return $outputRow;
  }
  console.info("loading");
  $.getJSON("./resources/spawn/buildings.json", "", function(file){
    for(const buildingName in file.buildings){
      $("#progress-table").append(addRow(file.buildings[buildingName]));
    }
  });
}
