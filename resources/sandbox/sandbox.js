/* AJAX Tutorial, By The Net Ninja
https://www.youtube.com/watch?v=h0ZUpPiV1ac
*/

window.onload = function(){
  $.get("./data/players.json", function(data){
    console.log(data);
    document.getElementById('atom-players').innerHTML = JSON.stringify(data);
  });

  $.get("https://server.figytuna.com:8080/ali/hello/world", function(data){
    document.getElementById('hello-world').innerHTML = data;
  });

  $.get("https://server.figytuna.com:8080/ali/hello/data", function(data){
    document.getElementById('hello-data').innerHTML = data;
  });
  $.get("https://server.figytuna.com:8080/ali/hello/players", function(data){
    document.getElementById('hello-players').innerHTML = data;
  });
  /*
  let http = new XMLHttpRequest();

  http.onreadystatechange = function(){
    const finalState = 4;
    const idealStatus = 200;

    if(http.readyState == finalState && http.status == idealStatus){
      console.log(JSON.parse(http.response));
    }

  }

  const method = "GET";
  const filepath = "data/players.json";
  const isASYNC = true;
  http.open(method, filepath, isASYNC);
  http.send();
  */

}

/* READY STATES

0 - Request not initialized
1 - Request has been set up
2 - Request has been sent
3 - Request is in process
4 - Request is complete

*/
