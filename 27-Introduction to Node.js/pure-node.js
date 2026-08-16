const http = require("http");

const server = http.createServer((request, response) => {
  let body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
    let userName = /*body.split("=")[1]*/ "Unknown user";
    if (body) {
      userName = body.split("=")[1];
    }

    console.log(body);
    response.setHeader("Content-Type", "text/html");
    // response.write("<h1>Hello there!</h1>");
    response.write(
      `<h1>Hi ${userName}</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`,
    );
    response.end();
  });
  // console.log(request.method, request.url);
});

server.listen(3000);
