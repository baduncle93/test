

exports.handler = function(event, context, callback) {
  params = JSON.parse(event.queryStringParameters)
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + .params.first + params.second
  });
};