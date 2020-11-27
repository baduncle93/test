

exports.handler = function(event, context, callback) {
  console.log(event.queryStringParameters)
  console.log(event.queryStringParameters.first)
  console.log(event.queryStringParameters.second)

  params = JSON.parse(event.queryStringParameters)
  console.log(params)
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + params.first + params.second
  });
};