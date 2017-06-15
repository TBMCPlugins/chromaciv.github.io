/* AJAX Tutorial, By The Net Ninja
https://www.youtube.com/watch?v=h0ZUpPiV1ac
*/

window.onload = function(){

  const serverPath = "https://server.figytuna.com:8080/ali/hello/";
  const pages = [
    "world",
    "data",
    "players",
    "location"
  ]
  //Generate HTML table
  for (pagePath in pages){
    //Adds new table row based on the data request
    const $newTableRow = $("<tr>"
      + "<td>Hello " + pagePath + "</td>"
      + "<td id=\"hello-"+ pagePath + "\"></td>"
      + "</tr>");

    //Appends new table row to table
    $("#hello-table").after($newTableRow);
  }

  //Gets Table data from server
  for (pagePath in pages){
    $.get(serverPath + pagePath, function(data){
      document.getElementById("hello-" + pagePath).innerHTML = data;
    });
  }
}
