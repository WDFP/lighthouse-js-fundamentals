function range(start, end, step) {
  let answer = [];
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return answer;
  } else {
    for (let result = start; result <= end; result += step) {
      answer.push(result);
    }
  } return answer;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
