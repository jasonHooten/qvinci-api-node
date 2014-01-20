var request = require('request'),
    url = require('url');

var DM_BASE_API = 'https://api.qvinci.com/v1';

var QvinciAPI = function(companyAccessToken) {
    this._accessToken = companyAccessToken;
    this._authFailed = true;
};

QvinciAPI.prototype.api = function(verb, endpoint, data, callback) {

    verb = verb.toUpperCase(); // always UPPERCASEPLS

    var opts = {
        url: DM_BASE_API + endpoint,
        method: verb,
        headers: {
            'X-apiToken': this._accessToken
        }
    };

    // Automatic data passing
    switch (verb)
    {
        case 'GET': // append query string
            opts.url += url.format({ query: data });
            break;
        case 'POST': // use form param
            opts.form = data;
            break;
        default: // strip the first ?
            opts.body = url.format({ query: data }).substring(1);
    }

    // Perform actual api request
    return request(opts, function(e, r, body) {
        if (typeof callback === 'function')
            callback(JSON.parse(body));
    });
};


// Convenience methods for api
QvinciAPI.prototype.get = function(endpoint, data, callback) { this.api('GET', endpoint, data, callback); };
QvinciAPI.prototype.post = function(endpoint, data, callback) { this.api('POST', endpoint, data, callback); };
QvinciAPI.prototype.head = function(endpoint, data, callback) { this.api('HEAD', endpoint, data, callback); };
QvinciAPI.prototype.put = function(endpoint, data, callback) { this.api('PUT', endpoint, data, callback); };
QvinciAPI.prototype.patch = function(endpoint, data, callback) { this.api('PATCH', endpoint, data, callback); };
QvinciAPI.prototype.del = function(endpoint, data, callback) { this.api('DELETE', endpoint, data, callback); };

module.exports.client = QvinciAPI;