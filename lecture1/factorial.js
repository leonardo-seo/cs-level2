// factorial 구하기
var factorial = function(num) {
  if(num === 1){
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5));