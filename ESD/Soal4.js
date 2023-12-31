function cekDuplikat(dataAngka) {
  var uniqueNumbers = new Set();

  for (var i = 0; i < dataAngka.length; i++) {
    if (uniqueNumbers.has(dataAngka[i])) {
      return true;
    }
    uniqueNumbers.add(dataAngka[i]);
  }

  return false;
}

var numbersData = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
var result = cekDuplikat(numbersData);

console.log(result);
