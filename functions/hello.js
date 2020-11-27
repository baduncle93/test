

exports.handler = function(event, context, callback) {

  console.log(event.headers);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(event.body);
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + event.headers
  });
};