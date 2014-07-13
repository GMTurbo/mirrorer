
var fs = require('fs'),
    watcher = require('node-watch'),
    path = require('path'),
    args = require('minimist')(process.argv.slice(2));

var Mirror = function(){
  
  this.watch = function(to, from){
    
    if(!to && ! from) { console.log('need some args :/'); return;}
    
    watcher(args.from, function(filename){
      
      var shortname = path.basename(filename);
      if(!fs.lstatSync(filename).isFile()){
        fs.createReadStream(filename)
          .pipe(fs.createWriteStream(args.to + '/' + shortname));
        console.log('copying ' + shortname + ' to ' + args.to);
      }
      
    });
  };
  
};

