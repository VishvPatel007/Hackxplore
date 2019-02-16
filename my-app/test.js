const psv2json = require('psv2json');

let psvStream = fs.createReadStream('my/psv/file', { encoding: 'utf8' });
let jsonStream = fs.createWriteStream('my/json/file');

psvStream.pipe(psv2json()).pipe(jsonStream);
