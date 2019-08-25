var compile = function(sourceCode) {
    console.log(`Compiling: ${sourceCode}`);
};

var interpret = function(sourceCode) {
    console.log(`Interpreting: ${sourceCode}`);
};

module.exports.compile = compile;
module.exports.interpret = interpret;