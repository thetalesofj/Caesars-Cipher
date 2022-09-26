function rot13(str) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return str.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
  }