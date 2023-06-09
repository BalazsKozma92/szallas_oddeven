class OddOrEven {
    expression: string;

    constructor(expression: string) {
        this.expression = expression;
    }

    isEven(): boolean {
        let numbers = this.expression.match(/[+-]?\d+/g)?.map(Number) ?? [];
        let sum = numbers.reduce((acc, val) => acc + val, 0);
        return sum % 2 === 0;
    }
}

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('Adj meg egy string típusú paramétert, mely csak számokat, kötő,- és pluszjeleket tartalmazhat: ', (expression: string) => {
        if (/^[-+0-9]+$/.test(expression)) {
            if (expression.length === 0) {
                console.log('A megadott érték hossza nem lehet 0.');
                promptUser();
            } else if (expression === '0') {
                console.log('A megadott érték nem lehet 0.');
                promptUser();
            } else {
                console.log(new OddOrEven(expression).isEven());
                rl.close();
            }
        } else {
            console.log('A megadott érték csak számjegyeket, + és - karaktereket tartalmazhat!');
            promptUser();
        }
    });
}


promptUser();