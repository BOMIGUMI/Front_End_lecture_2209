// 웬만하면 const로 변수를 선언할 것
// 값이 변하는 변수만 Var로 선언할 것(2015년 이전)
// let을 사용할것 => 한번밖에 선언할수 없다.
// 내가 사용할 변수는 미리 정의하고 시작해야만 함

const a = 10;
let b = 20;
b +=a;
console.log(a,b); //출력 메소드

/*
var c =10;
var c = 20; // 여러번 선언 가능

let d = 10;
d = 20;

console.log(Math.PI, Math.sqrt(d));
*/

// 기본자료형
// 1. Number
console.log(typeof(3.1), typeof(2));
// 2. String
console.log(typeof('abc'), typeof('안녕'));
// template literal 변수의 값이 나옴
let tl = `a=${a}, b=${b}`;    // back quote, ESC 아래의 자판
console.log(tl);
tl = tl + ' 문자열 결합';
console.log(tl);
let st = '문자열과 숫자의 결합' + 123;
console.log(st);
console.log(st, st[0], st[st.length-1]);

const today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1);
console.log(typeof today);      // object

// 3. bool 연산
console.log(4 > 3, 4 < 3);     // true, false
console.log(4 > 3 && 10 > 8, '가방' < '나무' || false);
console.log(today.getHours() >= 9 && today.getHours() < 18);

// 4. undefined
let pi;
console.log(typeof pi);
pi = Math.PI;
console.log(typeof pi);
console.log(new Date().getFullYear());