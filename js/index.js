import {RomanConverter} from "./classes/index.js";

export class Boot {
    constructor() {
        const converter = new RomanConverter();
        document.getElementById('toRomanButton').addEventListener('click', () => {
            const number = parseInt(document.getElementById('numberInput').value);
            if (!isNaN(number) && number > 0 && number <= 3999) {
                const roman = converter.toRoman(number);
                document.getElementById('result').innerText = `Romano: ${roman}`;
            } else {
                document.getElementById('result').innerText = 'Por favor, insira um número válido (1-3999).';
            }
        });

        document.getElementById('toIntegerButton').addEventListener('click', () => {
            const roman = document.getElementById('romanInput').value.toUpperCase();
            const integer = converter.fromRoman(roman);
            document.getElementById('result').innerText = `Inteiro: ${integer}`;
        });
    }
}