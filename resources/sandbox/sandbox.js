/* AJAX Tutorial, By The Net Ninja
https://www.youtube.com/watch?v=h0ZUpPiV1ac
*/

window.onload = function(){

  const serverPath = "https://server.figytuna.com:8080/ali/hello/";
  const pages = [
    "World",
    "Data",
    "Players",
    "Location"
  ]
  //Generate HTML table
  for (const pagePath of pages){
    //Adds new table row based on the data request
    const $newTableRow = $("<tr>"
      + "<td>Hello " + pagePath + "</td>"
      + "<td id=\"hello-"+ pagePath.toLowerCase() + "\"></td>"
      + "</tr>");

    //Appends new table row to table
    $("#hello-table").after($newTableRow);
  }

  //Gets Table data from server
  for (const pagePath of pages){
    $.get(serverPath + pagePath.toLowerCase(), function(data){
      console.log(pagePath + "|" + data);
      document.getElementById("hello-" + pagePath.toLowerCase()).innerHTML = data;
    });
  }
}
