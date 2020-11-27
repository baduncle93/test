

exports.handler = function(event, context, callback) {

  console.log(event.headers);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(event.context);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(event.url);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + event.headers
  });
};