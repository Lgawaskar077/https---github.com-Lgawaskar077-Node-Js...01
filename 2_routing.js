var express = require('express')

var app = express();
const ROUTE = "/contact";

//curl -x POST http://localhost:5000/contact
app .get(ROUTE,function(request,response){
    console.log("request received for get method");
    response.send("request received for get method");
});
 
//curl -x POST http://localhost:5000/contact
app .post(ROUTE,function(request,response){
    console.log("request received for post method");
    response.send("request received for post method");
});

//curl -x PUT http://localhost:5000/contact
app .put(ROUTE,function(request,response){
    console.log("request received for put method");
    response.send("request received for put method");
});

//curl -x DELETE http://localhost:5000/contact
app .delete(ROUTE,function(request,response){
    console.log("request received for delete method");
    response.send("request received for delete method");
});

const portno = 5000;
app.listen (portno,function (error){
    if (error)
        console.log(error);
    else
        console.log("ready to accept request...");
});