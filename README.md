# Brainfuck Interpreter - A Brainfuck Programming Language Interpreter for JavaScript

## Installation:

npm install --save-prod brainfuck-interpreter

## Usage:

var brainfuckInterpreter = require("../brainfuckInterpreter");

const brainfuckHelloWorldSourceCode =
    "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+.------.--------.>>+.>++.";
brainfuckInterpreter.interpret(brainfuckHelloWorldSourceCode);