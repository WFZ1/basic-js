const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type) {
    this.invert = type; 
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.table = [];
  }

  fillTable() {
    let size = this.alphabet.length;

    // Two-dimensional array of latin letters
    for (let i = 0; i < size; i++) {
      this.table[i] = [];

      for (let j = 0; j < size; j++) {
        this.table[i][j] = (i + j < size) ?  this.alphabet[i + j] : this.alphabet[i + j - size];
      }
    }
  }

  checkValues(str, key) {
    if (!str || !key) throw Error ('Parameters aren\'t correct.')

    let size = Math.ceil(str.length / key.length), // in how many times str is longer than key
        str_key = key;

    // str_key length do to equal or more length str
    while (size-- > 1) str_key += key;

    // if str has spaces, it will add to key
    if (str.includes(' ')) {
      str_key = str_key.split('');
      
      for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') str_key.splice(i, 0, str[i]);
      }

      str_key = str_key.join('');
    }

    return str_key;
  }

  reverse(str) {
    return str.split('').reverse().join('');
  }

  code(str, key, func) {
    let str_key = this.checkValues(str, key),
        code = '';

    for (let i = 0; i < str.length; i++) {
      // Indexs of the letter of the str and the key
      let letter_i = this.alphabet.indexOf( str[i].toUpperCase() ),
          letter_j = this.alphabet.indexOf( str_key[i].toUpperCase() );

      code += func(letter_i, letter_j, str[i]);
    }

    if (this.invert === false) code = this.reverse(code);

    return code;
  }

  encrypt(str, key) {
    this.fillTable();

    let encode = this.code(str, key, (i, j, symbol) => {
      return (i !== -1 && j !== -1) ? this.table[i][j] : symbol;
    });

    return encode;
  }

  decrypt(str, key) {
    let decode = this.code(str, key, (i, j, symbol) => {
      if (i !== -1 && j !== -1) {
        if (i === j || i > j) {
          return this.alphabet[ Math.abs(i - j) ];
        }
        else {
          return this.alphabet[ this.alphabet.length - Math.max(i, j) + Math.min(i, j) ];
        }  
      } 
      else {
        return symbol;
      }
    });

    return decode;
  }
}

module.exports = VigenereCipheringMachine;
