
var http = require('http');
function GetLocalIPAddr(){ 
  var oSetting = null; 
  var ip = null; 
  try{ 
      oSetting = new ActiveXObject( "rcbdyctl.Setting" ); 
      ip = oSetting.GetIPAddress; 
      alert(ip); 
      if (ip.length == 0){ 
          return "没有连接到Internet"; 
      } 
      oSetting = null; 
  }catch(e){ 
      return ip; 
  } 
  return ip; 
} 

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!' + GetLocalIPAddr());  
};
var www = http.createServer(handleRequest);
www.listen(8080);
