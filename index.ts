import * as http from "http";

const server = http.createServer();
server.on("request", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  const { method, url, headers } = request;
  const array = [];
  request.on("data", (chunk) => {
    array.push(chunk);
  });
  request.on("end", () => {
    const body = Buffer.concat(array).toString();
    console.log("body");
    console.log(body);
    response.statusCode = 404;
    response.write("1\n");
    response.end();
  });
});

server.listen(8888);
