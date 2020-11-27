

exports.handler = function(event, context, callback) {
  console.log(event.queryStringParameters)
  console.log(event.queryStringParameters.first)
  console.log(event.queryStringParameters.second)

  params = event.queryStringParameters
  console.log(params)
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + params.test + " " + sum(params.first,params.second)
  });
};