function cekPalindrom(kata) {
  var withoutSpaces = kata.toLowerCase().replace(/\s/g, '');
  
  var reversedWord = withoutSpaces.split('').reverse().join('');
  if (withoutSpaces === reversedWord) {
    console.log('eureka!');
  } else {
    console.log('suka blyat');
  }
}

cekPalindrom('Angsa');
cekPalindrom('KataK');
cekPalindrom('kasur empuk');
cekPalindrom('Aku Suka Kamu');
cekPalindrom('Ibu Ratna antar ubi.');
