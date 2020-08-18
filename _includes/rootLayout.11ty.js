exports.data = {
  title: "Eugie Limpin"
};

exports.render = function(data) {
return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/index.css" >
    <title>${data.title}</title>
  </head>
  <body>
    ${data.content}
  </body>
</html>`;
};