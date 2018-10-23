// lecture2 - STEP3. 학점계산기 코드개선


// 새로운 과목을 추가하는 함수
const addLecture = function (newLecture) {

  data.push(newLecture);
  showGrade(data);
}



// 학점을 제거하는 함수
let removeLecture = function (lectureName, delayTime) {

  for (let keys in data) {

    const value = data[keys].name;
    if (lectureName === value) data.splice(keys, 1);
  }
  setTimeout(() => { showGrade(data); }, delayTime);
}



// 전공학점을 계산하는 함수
let calculateMajorGrade = function (data) {

  let majorSum = 0;
  let majorCredits = 0;

  for (let keys of data) {

    const { grade, major, credit } = keys;
    gradePoint = changeEnglish[grade];

    if (major) {

      majorCredits += credit;
      majorSum += gradePoint * credit;
    }
  }

  let calculateMajorResult = {
    majorGrade: calculate(majorSum, majorCredits, 4.5),
    majorGradeFor: calculate(majorSum, majorCredits, 4.0),
    majorCredits: majorCredits
  }
  return calculateMajorResult;
}


// 학점을 계산하는 함수
let calculateGrade = function (data) {

  let sum = 0;
  let credits = 0;

  for (let keys of data) {

    const { grade, credit } = keys;
    gradePoint = changeEnglish[grade];
    credits += credit;
    sum += gradePoint * credit;
  }

  let calculateResult = {
    totalGrade: calculate(sum, credits, 4.5),
    totalGradeFor: calculate(sum, credits, 4.0),
    credits: credits,
  }
  return calculateResult;
}



// 학점을 출력하는 함수
let showGrade = function (data) {

  const calculateResult = calculateGrade(data);
  const calculateMajorResult = calculateMajorGrade(data);

  console.log(`(4.5기준)  총평점 : ${calculateResult['totalGrade']}  전공 평점 = ${calculateMajorResult['majorGrade']}`);
  console.log(`(4.0기준)  총평점 : ${calculateResult['totalGradeFor']}  전공 평점 = ${calculateMajorResult['majorGradeFor']}`);
  console.log(`         이수학점 : ${calculateResult['credits']} 전공이수학점 = ${calculateMajorResult['majorCredits']}`);
}



// 최대평점 기준을 4.5에서 4.0으로 변환하는 함수
let calculate = function (sum, creditSum, scale) {

  if (scale === 4.5) return (sum / creditSum).toFixed(2);
  return (sum * (4 / 4.5) / creditSum).toFixed(2);
}



// data를 정렬 하는 함수
let sortGrade = function (data) {

  data.sort(function (a, b) {

    let aGrade = changeEnglish[a.grade];
    let bGrade = changeEnglish[b.grade];

    if (aGrade < bGrade) return 1;
    if (aGrade > bGrade) return -1;

    if (a.credit < b.credit) return 1;
    if (a.credit > b.credit) return -1;
  });
}



// 정렬한 데이터를 출력하는 함수
let sortMyGrade = function (data) {

  sortGrade(data);
  let oldGrade = data[0].grade;

  console.log(`-------------`);

  for (let keys in data) {

    if (oldGrade != data[keys].grade) console.log('');

    console.log(`'${data[keys].name}', '${data[keys].grade}', ${data[keys].credit}학점`);
    oldGrade = data[keys].grade;
  }
  console.log(`-------------`);
}



// greade를 숫자값으로 대응한 배열
const changeEnglish = {
  'A+': 4.5,
  'A': 4,
  'B+': 3.5,
  'B': 3,
  'C+': 2,
  'C': 2,
  'D+': 1.5,
  'D': 1,
  'F': 0
}



// 데이터
const data = [{
  'name': '네트워크실습',
  'grade': 'A',
  'credit': 1,
  'major': true
},
{
  'name': '데이터베이스',
  'grade': 'A',
  'credit': 3,
  'major': false
},
{
  'name': '철학',
  'grade': 'B+',
  'credit': 1,
  'major': true
},
{
  'name': '웹프로그래밍',
  'grade': 'A',
  'credit': 3,
  'major': false
},
{
  'name': '자료구조와 알고리즘',
  'grade': 'B',
  'credit': 3,
  'major': true
},
{
  'name': '프로그래밍 설계',
  'grade': 'B',
  'credit': 2,
  'major': false
},
{
  'name': 'VIM으로최강속도코딩하기',
  'grade': 'D',
  'credit': 1,
  'major': true
},
{
  'name': 'Java완전정복',
  'grade': 'D',
  'credit': 3,
  'major': false
},
{
  'name': '이산수학',
  'grade': 'B',
  'credit': 1,
  'major': true
},
{
  'name': '컴퓨터 일반',
  'grade': 'B+',
  'credit': 1,
  'major': true
}

];


addLecture({
  'name': '파이썬',
  'grade': 'C+',
  'credit': 2,
  'major': true
})
// (4.5기준)  총평점 : 2.90  전공 평점 = 2.80
// (4.0기준)  총평점 : 2.58  전공 평점 = 2.49
//          이수학점 : 21 전공이수학점 = 10
showGrade(data);
// (4.5기준)  총평점 : 2.90  전공 평점 = 2.80
// (4.0기준)  총평점 : 2.58  전공 평점 = 2.49
//          이수학점 : 21 전공이수학점 = 10

removeLecture('철학', 2000); // 2초뒤에 실행
// -------------
// '데이터베이스', 'A', 3학점
// '웹프로그래밍', 'A', 3학점
// '네트워크실습', 'A', 1학점

// '컴퓨터 일반', 'B+', 1학점

// '자료구조와 알고리즘', 'B', 3학점
// '프로그래밍 설계', 'B', 2학점
// '이산수학', 'B', 1학점

// '파이썬', 'C+', 2학점

// 'Java완전정복', 'D', 3학점
// 'VIM으로최강속도코딩하기', 'D', 1학점
// -------------

sortMyGrade(data);
// (4.5기준)  총평점 : 2.88  전공 평점 = 2.72
// (4.0기준)  총평점 : 2.56  전공 평점 = 2.42
//          이수학점 : 20 전공이수학점 = 9