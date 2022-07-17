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
    '**********': ' '
};

function decode(expr) {
    let code = expr;
    let numofletters = expr.length / 10;
    let arrofcodes = [];
    let resstr = '';
    let result = '';

    for (let i = 0; i < numofletters; i++){
        arrofcodes.push(code.substr(0, 10));
        code = code.replace(code.substr(0, 10), "");
    }

    const compare = (one) => {
        let temp = '';

        for(x in MORSE_TABLE){
            let n = '';
            n = x.replace(/\./g, "10").replace(/-/g, "11");    
            n.length < 10 ? n = "0".repeat(10 - n.length) + n : n = n;

            if(one === n){
                temp = MORSE_TABLE[x];
            }
        }
        return temp;
    }

    arrofcodes.forEach((item) => {
        let harf = compare(item);
        result += harf;
    })
    
    return result;
}

module.exports = {
    decode
}