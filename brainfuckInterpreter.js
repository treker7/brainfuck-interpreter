var readline = require("./node_modules/readline-sync");

const MEM_SIZE = 30000;
const mem_arr = [];
var data_ptr = 0;

// initialize the data pointer and memory array
var init = function(){
    data_ptr = 0;
    mem_arr.length = MEM_SIZE;
    mem_arr.fill(0);
}

/**
 * A function to compile BrainFuck Source Code into JavaScript
 * 
 * @param {string} bfSourceCode - the brainfuck source code to be compiled
 * @returns {string} - the compiled JavaScript source code
 */
function compile(bfSourceCode) {
    init();

    var jsSourceCode = '(function(ptr, arr, readline) {';

    const codeLength = bfSourceCode.length;
    for (var i = 0; i < codeLength; i++) {
        const currBfInstr = bfSourceCode.charAt(i);

        switch (currBfInstr) {
            case '>':
                jsSourceCode += '++ptr;';
                break;
            case '<':
                jsSourceCode += '--ptr;';
                break;
            case '+':
                jsSourceCode += 'arr[ptr] += 1;';
                break;
            case '-':
                jsSourceCode += 'arr[ptr] -= 1;';
                break;
            case '.':
                jsSourceCode += 'console.log(String.fromCharCode(arr[ptr]));';
                break;
            case ',':
                jsSourceCode += 'arr[ptr] = readline.question().charCodeAt(0);';
                break;
            case '[':
                jsSourceCode += 'while(arr[ptr]) {';
                break;
            case ']':
                jsSourceCode += '}';
                break;
            default: /* do nothing */
        }
    }

    jsSourceCode += '}(data_ptr, mem_arr, readline));'

    return jsSourceCode;
};

/**
 * A function to interpret BrainFuck Source Code
 * 
 * @param {string} bfSourceCode - the brainfuck source code to be interpreted
 */
var interpret = function(bfSourceCode) {
    var jsCode = compile(bfSourceCode);
    eval(jsCode);
};

module.exports.interpret = interpret;