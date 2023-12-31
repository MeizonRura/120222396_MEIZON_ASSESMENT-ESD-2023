function countUsernames(firstName, lastName, maxLength) {
  let combinationCount = 0;
  for (let i = 1; i <= firstName.length && i <= maxLength; i++) {
    for (let j = 1; j <= lastName.length && (i + j) <= maxLength; j++) {
      combinationCount++;
    }
  }

  return combinationCount;
}

const userFirstName = "Naip";
const userLastName = "Lovyu";

const maxUsernameLength = 6;

const totalCombinations = countUsernames(userFirstName, userLastName, maxUsernameLength);

console.log(`Jumlah kombinasi username yang mungkin: ${totalCombinations}`);
