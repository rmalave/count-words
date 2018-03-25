'use strict';

function countWords(str) {
  let arr = str.split(' ');
  let wordTally = {
    maxWord: '',
    maxNum: 0
  }

  arr.forEach(word => {
    if (wordTally[word]) {
      wordTally[word] = 0;
    }

    wordTally[word]++;
    if (wordTally[word] > wordTally.maxNum) {
      wordTally.maxNum = wordTally[word]
      wordTally.maxWord = word;
    }

  });

  return { maxUsed: wordTally.maxWord, occurrences: wordTally.maxNum };
}
