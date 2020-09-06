// window.onload = function(){
//    //vanilajs way

//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function(){
//       if(http.readyState == 4 && http.status==200){
//            // console.log(JSON.parse(http.response));
//       }
//     };
//     http.open("GET","data/tweets.json",false);
//     http.send();


//     //jquery way
//     $.get("data/tweets.json",function(data){
//             console.log(data)
//     });
//     console.log("test")


// };

function handleError(jqXHR,errorStatus,error){
    console.log(error);
    
}

window.onload = function () {

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error:handleError 
    });
    


    function  cbTweets(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error:handleError 
        });
    }

    function cbFriends(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function (data) {
                console.log(data);


            },
            error:handleError
        });


    }

}
