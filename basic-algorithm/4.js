//제일 긴 문자열 찾기

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
