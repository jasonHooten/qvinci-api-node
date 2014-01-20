qvinci-sdk-node
====================

Node.js SDK for Qvinci API

Check out our full [Qvinci Api Docs].

Installation
--------------

```sh
git clone https://github.com/jasonHooten/qvinci-sdk-node.git
cd qvinci-sdk-node
npm install
npm install -g mocha
mocha
```

Example
--------------

```javascirpt
var QvinciAPI = require("../");
var token = 'XXXXXX'; //user your own token
 
var api = new QvinciAPI.client(token),
   echo = 'testEcho';
        
api.get('/echo', echo, function(data){
    // use data somehow
});
```


[Qvinci Api Docs]:https://qvinci.atlassian.net/wiki/pages/viewpage.action?pageId=8355859
