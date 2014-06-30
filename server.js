var express = require('express')
  , app = express()
  , port = 5000;

app.use(express.static(__dirname));

app.listen(port, function () {
  console.log('tests running on port %d', port);
});