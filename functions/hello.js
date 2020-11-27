

exports.handler = function(event, context, callback) {
  const queryString = window.location.search;
  console.log(queryString);
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + queryString
  });
};