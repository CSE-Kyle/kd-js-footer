'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name // function expecting a parameter
 * @return {string} // output of the function
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};