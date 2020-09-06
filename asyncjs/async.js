window.onload = function(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
      if(http.readyState == 4 && http.status==200){
            console.log(JSON.parse(http.response));
      }  
    };
    http.open("GET","data/tweets.json",false);
    http.send();
    console.log("test");


}