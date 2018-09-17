// 최대공약수 구하기
var gcd = 0;
var commonDivisor = function(fn, sn) {
  for(var i = 0; i <= sn; i++) {
    if(fn % i === 0 && sn % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(commonDivisor(1000, 100));