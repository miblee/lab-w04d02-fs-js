var fs = require('fs');

fs.readFile('./census.csv', 'utf8', function(err, data){
  if(err) throw err;

  data = data.split('\n');
  data.pop();

  var keys = data.splice(0,1);
  keys = keys[0].split(',');
  for(var i = 0; i<keys.length; i++){
    keys[i] = keys[i].split(' ').join('');
  }
  console.log('keys:\n', keys);

  var splitData = [];
  while(data.length){
    var stateData = data.splice(0,1);
    splitData.push(stateData);
  };

  var outputData = [];
  for(var i = 0; i<splitData.length; i++){
    var dataObject = {};
    splitData[i] = splitData[i][0].split(',');
    for(var j = 0; j<keys.length; j++){
      dataObject[keys[j]] = splitData[i][j];
    };
    outputData.push(dataObject);
  }
  console.log("Output-able Data: \n", outputData)
  console.log();


  fs.writeFile('censusArr.md', splitData, function(err, data){
    if(err) throw err;
    console.log('censusArr file made');
  })
})


module.exports = {
  // parse: parse
  index.js
}

// create an empty object
// create keys of states
// plug in values
