var http = require('http');
var server = http.createServer ( function(request,response){

    response.writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
    {
        response.write('received GET request.');
        response.end()
    } else if(request.method == "POST")
    {
        response.write('received POST request.');
        response.end()
    } else if(request.method == "PUT")
    {
        response.write('received PUT request.');
        response.end()
    } else if(request.method == "PATCH")
    {
        response.write('received PATCH request.');
        response.end()
    } else if(request.method == "DELETE")
    {
        response.write('received DELETE request.');
        response.end()
    } else{
        response.write('invalid request.');
        response.end()
    }

});

server.listen(3000);
console.log("Server running on port 3000");