qvinci-sdk-node
====================

Node.js SDK for Qvinci API

Check out our full [Qvinci Api Docs].

Install
--------------

Add the following dependency to your packages.json file.

```json
   "qvinci-sdk-node": "git+ssh://git@github.com:jasonHooten/qvinci-sdk-node.git",
```

Then install via npm
```sh
npm install
```


Usage
--------------

```js
var QvinciAPI = require("qvinci-sdk-node");
var token = 'XXXXXX'; //user your own token
 
var api = new QvinciAPI.client(token),
   echo = 'testEcho';
        
api.get('/echo', echo, function(data){
    // use data somehow
});
```

Build
--------------

```sh
git clone https://github.com/jasonHooten/qvinci-sdk-node.git
cd qvinci-sdk-node
npm install
npm install -g mocha
mocha
```


[Qvinci Api Docs]:https://qvinci.atlassian.net/wiki/pages/viewpage.action?pageId=15368202
