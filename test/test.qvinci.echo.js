var QvinciAPI = require("../"),
    expect = require("chai").expect,
    /*
    * Create a file called apiToken.js in this directory
    * and export a variable called token
    * e.g. module.exports.token = '...';
    */
    token = require("./apiToken").token;


describe('GET /echo/', function() {
    
    it('should set a token correctly', function() {
        var api = new QvinciAPI.client(token);
        
        expect(api).to.exist;
        expect(api).to.have.property('_accessToken');
        expect(api._accessToken).to.exist;
        expect(api._accessToken).to.equal(token);
    });

    it('should echo a string', function() {
        var api = new QvinciAPI.client(token),
            echo = 'testEcho';
        

        api.get('/echo', echo, function(data){
            expect(data).to.exist;
            expect(data).to.equal(echo);
        });
    });
});