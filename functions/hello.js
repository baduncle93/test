

exports.handler = function(event, context, callback) {

  console.log(event);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(event.multiValueHeaders);
  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
  console.log(event.multiValueHeaders.queryStringParameters);
  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + event.headers
  });
};