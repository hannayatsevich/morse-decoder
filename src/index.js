const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = Array.from(expr.matchAll(/[01*]{10}/g));
    let decodedString = '';
    letters.forEach(letter => {
        if(letter[0].indexOf('*') > -1) decodedString += ' ';
        else {
            let letterElements =  Array.from(letter[0].matchAll(/[01*]{2}/g));
            let morseLetter = '';
            letterElements.forEach(element => {
            switch(element[0]) {
                case '10':
                morseLetter += '.';
                break;
                case '11':
                morseLetter += '-';
                break;
            }
            });
            decodedString += (MORSE_TABLE[morseLetter] ? MORSE_TABLE[morseLetter] : '');
        };
    });
    return decodedString;
}

module.exports = {
    decode
}