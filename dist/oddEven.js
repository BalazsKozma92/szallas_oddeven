"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
class OddOrEven {
    constructor(expression) {
        this.expression = expression;
    }
    isEven() {
        var _a, _b;
        let numbers = (_b = (_a = this.expression.match(/[+-]?\d+/g)) === null || _a === void 0 ? void 0 : _a.map(Number)) !== null && _b !== void 0 ? _b : [];
        let sum = numbers.reduce((acc, val) => acc + val, 0);
        return sum % 2 === 0;
    }
}
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function promptUser() {
    rl.question('Adj meg egy string típusú paramétert, mely csak számokat, kötő,- és pluszjeleket tartalmazhat: ', (expression) => {
        if (/^[-+0-9]+$/.test(expression)) {
            if (expression.length === 0) {
                console.log('A megadott érték hossza nem lehet 0.');
                promptUser();
            }
            else if (expression === '0') {
                console.log('A megadott érték nem lehet 0.');
                promptUser();
            }
            else {
                console.log(new OddOrEven(expression).isEven());
                rl.close();
            }
        }
        else {
            console.log('A megadott érték csak számjegyeket, + és - karaktereket tartalmazhat!');
            promptUser();
        }
    });
}
promptUser();
