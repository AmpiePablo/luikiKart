function route(handle, pathname, response, postData) {
    console.log("Rutear para: "+pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response,postData);
    } else {
        console.log("No hay manipulador para: "+pathname);
        response.writeHead(404,{"Content-Type": "text/html"});
        response.write("404 not found")
        response.end();
    }
}

exports.route = route;
