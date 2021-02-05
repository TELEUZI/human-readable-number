module.exports = function toReadable(number) {
    const singleDigits = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    const twoDigitsTens = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'
    };
    const twoDigitsOverTwenty = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    const getFirstNumber = (num) => Math.floor(num / 100)
    const getSecondNumber = (num) => Math.floor((num % 100) / 10)
    const getThirdNumber = (num) => num - getFirstNumber(num) * 100 - getSecondNumber(num) * 10;

    const FirstNumber = getFirstNumber(number);
    const SecondNumber = getSecondNumber(number);
    const ThirdNumber = getThirdNumber(number);

    const hundreds = () => FirstNumber !== 0 ? singleDigits[FirstNumber] + ' hundred' : '';
    const des = () => SecondNumber == 1 ? twoDigitsTens[ThirdNumber] : SecondNumber !== 0 ? twoDigitsOverTwenty[SecondNumber] : '';
    const eds = () => ThirdNumber !== 0 && SecondNumber !== 1 ? singleDigits[ThirdNumber] : '';

    return [hundreds(), des(), eds()].filter((element) => element !== '').join(' ') || 'zero';
}