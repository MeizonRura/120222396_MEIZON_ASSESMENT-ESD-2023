function decryptText(encryptedText, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let decryptedText = '';

  for (let i = 0; i < encryptedText.length; i++) {
    const character = encryptedText[i].toLowerCase();

    if (character === ' ' || !alphabet.includes(character)) {
      decryptedText += encryptedText[i];
    } else {
      const index = (alphabet.indexOf(character) - shift + 26) % 26;
      decryptedText += encryptedText[i] === character.toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index];
    }
  }

  return decryptedText;
}

const encryptedMessage = `
xfqfr bfmdz
gjxtp lzj rfz ifkyfw jxi snm
gwt, gjxtp qz rfz rfpfs in bfwlty lfp?
fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz
dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu
`;

const decryptedMessage = decryptText(encryptedMessage, 5);

console.log(decryptedMessage);
  