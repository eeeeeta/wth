/*
 * What The Hell - for when wtf(6) doesn't work properly.
 *
 * Usage:
 * wth(6) - define an unknown acronym or slang term.
 * wth [is] (term).
 */
var opts = require('nomnom').parse();
var urban = require('urban');

var query;
if (opts[0] == "is") query = opts[1]; else query = opts[0];
if (!query) {
    console.error("error: invalid query provided");
    process.exit(1);
};
urban(query).first(function(result) {
    if (!result) {
        console.error("error: fetching data failed (check your internet connection)");
        process.exit(1);
    }
    console.log(query + '\t' + result.definition);
    process.exit(0);
});
