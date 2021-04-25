//.endsWith()가 아닌 slice(startlength - target.lenth)로 마지막 문자열을 가져올 수 있다.
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Congratulation", "on");
