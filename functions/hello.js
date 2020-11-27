

exports.handler = function(event, context, callback) {

  console.log(event.headers);
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + event.headers
  });
};