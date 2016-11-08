var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var app = new express();

app.use(express.static('public'));

app.post("/", upload.single('file_input'), function(req, res) {
	res.json({size: req.file.size});
});

app.listen(process.env.PORT || 7000);