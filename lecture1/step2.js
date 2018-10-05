// STEP2. 여러함수를 호출하는 함수


// 반지름을 입력받아 원의 넓이를 계산하는 함수
var circleArea = function(radius) {

  if(typeof radius === 'undefined') return console.log('인자의 개수가 부족합니다.');
  if(typeof radius !== 'number') return console.log('숫자가 아닙니다.');
  var area = Math.PI * (radius * radius);
  console.log(area);

}



// 반지름을 입력받아 원의 넓이를 연속해서 계산하는 함수
var circleAreaLoop = function(radius1, radius2) {

  if(typeof radius1 === 'undefined' || typeof radius2 === 'undefined') return console.log('인자의 개수가 부족합니다.');
  if(typeof radius1 !== 'number' || typeof radius2 !== 'number') return console.log('숫자가 아닙니다.');

  for(var i = radius1; i <= radius2; i++){
    var area = Math.PI * (i * i);
    console.log(area);
  } return;
}



// 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수
var squareArea = function(width, height) {

  if(typeof width === 'undefined' || typeof height === 'undefined') return console.log('인자의 개수가 부족합니다.');
  if(typeof width !== 'number' || typeof height !== 'number') return console.log('숫자가 아닙니다.');

  var area = width * height;
  console.log(area);

}



// 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수
var trapezoidArea = function(top, bottom, height) {

  if(typeof top === 'undefined' || typeof bottom === 'undefined' || typeof height === 'undefined') return console.log('인자의 개수가 부족합니다.');
  if(typeof top !== 'number' || typeof bottom !== 'number' || typeof height !== 'number') return console.log('숫자가 아닙니다.');
  var area = ((top + bottom) * height / 2);
  console.log(area);

}



// 필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수.
var cylinderArea = function(radius, height) {
  
  if(typeof radius === 'undefined' || typeof height === 'undefined') return console.log('인자의 개수가 부족합니다.');
  if(typeof radius !== 'number' || typeof height !== 'number') return console.log('숫자가 아닙니다.');
  var area = (Math.PI * (radius * radius)) * height;
  console.log(area);

}



// 모든 넓이 값을 얻을 수 있는 함수
var getArea = function(object, num1, num2, num3, num4) {

  if(object === 'circle' && typeof num2 !== 'undefined' && typeof num3 === 'undefined') return (circleAreaLoop(num1, num2));
  if(object === 'circle' && typeof num2 !== 'number') return (circleArea(num1));
  if(object === 'rect' && typeof num3 === 'undefined') return(squareArea(num1, num2));
  if(object === 'trapezoid' && typeof num4 === 'undefined') return(trapezoidArea(num1, num2, num3));
  if(object === 'cylinder' && typeof num3 === 'undefined') return(cylinderArea(num1, num2));
  if(num4 !== 'undefined') return console.log('인자의 개수가 너무 많습니다.');

  console.log("입력값이 올바르지 않습니다.");

}

// TEST CASE

getArea('circle', 1, 3); // 통과
getArea('circle', 1, '3'); //숫자 x
getArea('circle', '1', 3); // 숫자 x

getArea('circle', 3); // 통과
getArea('circle'); // 인자 개수 부족
getArea('circle', 1, 3, 10, 5); //입력값이 올바르지 않습니다.



getArea('rect', 1, 3);
getArea('rect', '1', 3); // 숫자 x
getArea('rect', 1, '3'); // 숫자 x

getArea('rect', 1); // 인자 개수 부족
getArea('rect'); // 인자 개수 부족
getArea('rect', 1, 3, 5); // 인자가 너무 많습니다.
getArea('rect', 1, 3, 5, 7); // 인자가 너무 많습니다.



getArea('trapezoid', 1, 3, 5); // 통과
getArea('trapezoid', '1', 3, 5); //숫자 x
getArea('trapezoid', 1, '3', 5); // 숫자 x
getArea('trapezoid', 1, 3, '5'); // 숫자 x

getArea('trapezoid', 1, 3); // 인자 개수 부족
getArea('trapezoid', 1); // 인자 개수 부족
getArea('trapezoid', 1, 3, 5, 10); //인자가 너무 많습니다.



getArea('cylinder', 1, 3); //통과
getArea('cylinder', '1', 3); // 숫자 x
getArea('cylinder', 1, '3'); // 숫자 x

getArea('cylinder', 1); // 인자 개수 부족
getArea('cylinder'); // 인자 개수 부족
getArea('cylinder', 1, 3, 5); // 인자가 너무 많습니다.
getArea('cylinder', 1, 3, 5, 7); // 인자가 너무 많습니다.