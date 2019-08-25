/*
 * Brainfuck Interpreter Tests
 *
 * HelloWorld Program From: https://en.wikipedia.org/wiki/Brainfuck 
 */

var brainfuckInterpreter = require("../brainfuckInterpreter");

describe("BrainfuckInterpreter", function () {

    beforeEach(function () { });

    const brainfuckHelloWorldSourceCode =
            "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

    it("Interprets the HelloWorld Program from Wikipedia", function () {
        brainfuckInterpreter.interpret(brainfuckHelloWorldSourceCode);
    });
});