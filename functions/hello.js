

exports.handler = function(event, context, callback) {
  params = JSON.parse(event.queryStringParameters)
  console.log(params)
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + params.first + params.second
  });
};