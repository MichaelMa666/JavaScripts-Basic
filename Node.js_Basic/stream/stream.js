var fs = require('fs');

var rs = fs.createReadStream('file.txt');

var data = '';

rs.on('data', function(chunk) {
	data += chunk;
});

rs.on('end', function() {
	console.log(data);
})

/* stream instance function read() */
rs.on('readable', function() {
	while((chunk = rs.read()) != null) {
		data += chunk;
	}
});

rs.on('end', function() {
	console.log(data);
})