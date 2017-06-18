window.onload = function(){
  const addRow = function(building){
    $nameElement = $("<td></td>")
      .attr("id", `${building.id}-progress.name`)
      .append(building.name);

    $useElement = $("<td></td>")
      .attr("id", `${building.id}-progress.use`)
      .append(building.use)

    $designedElement = $("<td></td>")
      .attr("id", `${building.id}-progress.designed`)
      .addClass("checkboxCell")
      .append($("<input>")
          .attr("type", "checkbox")
          .attr("id", `${building.id}.designed?`)
          .attr("checked", building.designed));

    $startedElement = $("<td></td>")
      .attr("id", `${building.id}-progress.stated`)
      .addClass("checkboxCell")
      .append($("<input>")
          .attr("type", "checkbox")
          .attr("id", `${building.id}.started?`)
          .attr("checked", building.started));

    $completedElement = $("<td></td>")
      .attr("id", `${building.id}-progress.completed`)
      .addClass("checkboxCell")
      .append($("<input>")
        .attr("type", "checkbox")
        .attr("id", `${building.id}.completed?`)
        .attr("checked", building.completed));

    $populatedElement = $("<td></td>")
      .attr("id", `${building.id}-progress.populated`)
      .addClass("checkboxCell")
      .append($("<input>")
        .attr("type", "checkbox")
        .attr("id", `${building.id}.populated?`)
        .attr("checked", building.populated));


    $outputRow = $("<tr></tr>")
      .attr("id", `${building.id}-progress`)
      .append($nameElement)
      .append($useElement)
      .append($designedElement)
      .append($startedElement)
      .append($completedElement)
      .append($populatedElement);
    return $outputRow;
  }
  console.info("loading");
  $.getJSON("./resources/spawn/buildings.json", "", function(file){
    for(const buildingName in file.buildings){
      $("#progress-table").append(addRow(file.buildings[buildingName]));
    }
  });
}
