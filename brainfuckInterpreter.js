var readline = require("./node_modules/readline-sync");

const MEM_SIZE = 30000;
const mem_arr = [];
var data_ptr = 0;

function init() {
    data_ptr = 0;
    for (var i = 0; i < MEM_SIZE; i++) {
        mem_arr[i] = 0;
    }
}

/**
 * A function to compile BrainFuck Source Code into JavaScript
 * 
 * @param {string} bfSourceCode - the brainfuck source code to be compiled
 * @returns {string} - the compiled JavaScript source code
 */
var compile = function(bfSourceCode) {
    init();

    var jsSourceCode = '';

    const codeLength = bfSourceCode.length;
    for (var i = 0; i < codeLength; i++) {
        const currBfInstr = bfSourceCode.charAt(i);

        switch (currBfInstr) {
            case '>':
                jsSourceCode += '++data_ptr;';
                break;
            case '<':
                jsSourceCode += '--data_ptr;';
                break;
            case '+':
                jsSourceCode += 'mem_arr[data_ptr] += 1;';
                break;
            case '-':
                jsSourceCode += 'mem_arr[data_ptr] -= 1;';
                break;
            case '.':
                jsSourceCode += 'console.log(String.fromCharCode(mem_arr[data_ptr]));';
                break;
            case ',':
                jsSourceCode += 'mem_arr[data_ptr] = readline().question().charCodeAt(0);';
                break;
            case '[':
                jsSourceCode += 'while(mem_arr[data_ptr]) {';
            break;
            case ']':
                jsSourceCode += '}';
            break;
            default: /* do nothing */
        }
    }

    return jsSourceCode;
};

/**
 * A function to interpret BrainFuck Source Code
 * 
 * @param {string} bfSourceCode - the brainfuck source code to be interpreted
 */
var interpret = function(bfSourceCode) {
    init();

    eval(compile(bfSourceCode));
};

module.exports.interpret = interpret;