/* AJAX Tutorial, By The Net Ninja
https://www.youtube.com/watch?v=h0ZUpPiV1ac
*/

window.onload = function(){

  const serverPath = "https://server.figytuna.com:8080/ali/hello/";
  const pages = {
    "unsafe": [
      "World",
      "Data",
      "Post"
    ],
    "html":[
      "Location",
      "Players",
    ]
  }
  //Generate HTML table
  for (const pageType in pages){
    for (const pagePath of pages[pageType]){
      //Adds new table row based on the data request
      const $newTableRow = $("<tr>"
        + "<td>Hello " + pagePath + "</td>"
        + "<td id=\"hello-"+ pagePath.toLowerCase() + "\"></td>"
        + "</tr>");

        console.log(pagePath + " added");
      //Appends new table row to table
      $("#hello-table").append($newTableRow);
    }
  }

  dataRequest = function(pagePath, pageType, requestType){
    $.ajax({
      type: requestType,
      url: serverPath + pagePath.toLowerCase(),
      timeout: 2000,
      beforeSend: function(data){
        $("#hello-" + pagePath.toLowerCase()).html("<em>Loading...</em>");
      },
      success: function(data){
        $element = $("#hello-" + pagePath.toLowerCase())
        if (pageType == "html"){
          $element.html($data);
        }else{
          $element.text($data);
        }
      },
      error: function(e){
        $("#hello-" + pagePath.toLowerCase()).html("<em>Error " + e.status + " " + e.statusText + "</em>");
      }
    });
  }
  //Gets Table data from server
  for (const pagePath of pages["html"]){
    dataRequest(pagePath, "safe", "GET");
  }

  for (const pagePath of pages["unsafe"]){
    dataRequest(pagePath, "unsafe", "GET");
  }
}
