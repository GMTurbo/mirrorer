
var fs = require('fs'),
    watch = require('node-watch'),
    path = require('path'),
    args = require('minimist')(process.argv.slice(2));


if(!args.to && ! args.from) { console.log('need some args :/'); return;}

watch(args.from, function(filename){
  var shortname = path.basename(filename);
  if(!fs.lstatSync(filename).isFile()){
    fs.createReadStream(filename)
      .pipe(fs.createWriteStream(args.to + '/' + shortname));
    console.log('copying ' + shortname + ' to ' + args.to);
  }
});