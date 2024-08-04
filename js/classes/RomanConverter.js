export default class RomanConverter {
    constructor() {
        this.romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" }
        ];
        this.romanNumeralsMap = this.romanNumerals.reduce((acc, { numeral, value }) => {
            acc[numeral] = value;
            return acc;
        }, {});
    }
    //private method
    toRoman(num) {
        let result = '';
        for (const { value, numeral } of this.romanNumerals) {
            while (num >= value) {
                result += numeral;
                num -= value;
            }
        }
        return result;
    }
    //private method
    fromRoman(roman) {
        let result = 0;
        for (let i = 0; i < roman.length; i++) {
            const currentVal = this.romanNumeralsMap[roman[i]];
            const nextVal = this.romanNumeralsMap[roman[i + 1]];
            if (nextVal && currentVal < nextVal) {
                result -= currentVal;
            } else {
                result += currentVal;
            }
        }
        return result;
    }
}

