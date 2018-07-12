"use strict";
/**
 * REPORT command - output design information in problem specific format
 */
var despak = require('./despak');
function report(split_line) {
    M_FLAG = true;
    var p = [];
    for (let i = 0; i < design.design_parameters.length; i++) {
        var dp = design.design_parameters[i];
        p[i] = dp.value;
    }
    var obj = despak(p);
    M_FLAG = false;
}
module.exports = report;
