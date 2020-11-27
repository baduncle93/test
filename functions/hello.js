

exports.handler = function(event, context, callback) {

  console.log(event);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(event.queryStringParameters);
  console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
  console.log(event.queryStringParameters.test);
  console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + event.queryStringParameters.test
  });
};