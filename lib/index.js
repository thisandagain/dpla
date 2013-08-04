/**
 * API client for the Digital Public Library of America
 *
 * @package dpla
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var _       = require('underscore'),
    json    = require('json5'),
    request = require('request');

/**
 * Returns an API client with the user supplied API key and version target.
 *
 * @param {String} API key
 * @param {String} API version target (defaults to 'v2')
 *
 * @return {Object}
 */
module.exports = function (key, version) {
    // Params
    if (typeof key === 'undefined') throw new Error('API key cannot be undefined.');
    if (typeof version === 'undefined') version = 'v2';

    /**
     * HTTP request adapter.
     *
     * @param {Object} Options
     *      - method {String}
     *      - uri {String}
     *      - search {Object}
     *          - q {String}
     *          - fields {String}
     *          - facets {String}
     *          - page_size {Number}
     *          - page {Number}
     *          - ...
     *
     * @return {Object}
     */
    return function (options, callback) {
        // Defaults
        _.defaults(options, {
            method:     'GET',
            uri:        '/',
            headers:    {},
            search:     {}
        });

        // Host
        options.uri         = 'http://api.dp.la/' + version + options.uri;
        options.qs          = options.search;
        options.qs.api_key  = key;

        // Request
        request(options, function (err, resp, body) {
            if (err) return callback(err);
            body = json.parse(body);

            if (parseInt(resp.statusCode, 10) !== 200) return callback(body);
            callback(null, body);
        });
    }; 
};