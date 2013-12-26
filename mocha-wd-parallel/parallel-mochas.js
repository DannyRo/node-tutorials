var exec = require('child_process').exec;
var Q = require('q');
var _ = require('lodash');

var mochaArgs = process.argv[2];

// building browser list
var browsers = process.argv.splice(3);

// context specific log
function log(config, data) {
  config = (config + '          ').slice(0, 10);
  _(('' + data).split(/(\r?\n)/g)).each(function(line) {        
    if(line.replace(/\033\[[0-9;]*m/g,'').trim().length >0) { 
      console.log(config + ': ' + line.trimRight() );
    }
  });
}

// runs the mocha tests for a given browser
function run_mocha(browser, done) {
  var env = _(process.env).clone();
  env.BROWSER = browser;

  var mocha = exec('mocha ' + mochaArgs, {env: env}, done);
  mocha.stdout.on('data', log.bind(null, browser));
  mocha.stderr.on('data', log.bind(null, browser));
}

// building job list
var jobs = _(browsers).map(function(browser) {
  return Q.nfcall(run_mocha, browser);
}).value();

// running jobs in parallel
Q.all(jobs).then(function() {
  console.log("ALL TESTS SUCCESSFUL");
})
.done();
