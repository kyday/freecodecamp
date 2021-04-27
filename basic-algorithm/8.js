//문자열 자르기

//내가 푼 방식..

function truncateString(str, num) {
  let strPlus = "...";
  if ((num) => str.length) {
    return str.slice(0, num);
  }
  return str.slice(0, num).concat(strPlus);
}

//솔루션

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
