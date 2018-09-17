// 객체 실습 1

const widget = {
  "debug": "on",
  "window": {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
  },
  "image": { 
      "src": "Images/Sun.png",
      "name": "sun1",
      "hOffset": 250,
      "vOffset": 250,
      "alignment": "center"
  },
  "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
  }
}

// 숫자타입으로만 구성된 요소를 뽑아 배열만들기
const numberKeys = [];
for (let key in widget) {
  const value = widget[key];
  if(typeof value === 'object') {
    for ( let key2 in value){
      const value2 = value[key2];
      if(typeof value2 === 'number') {
        numberKeys.push(key2);
      }
    }
  }
}
console.log(numberKeys);