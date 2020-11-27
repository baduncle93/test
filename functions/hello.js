const queryString = window.location.search;
console.log(queryString);

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, Tom Turbo " + queryString
  });
};