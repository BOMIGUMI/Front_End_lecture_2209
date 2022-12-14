// Array 생성
const cars = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria');      //Array도 객체이므로 생성자 함수를 사용해 생성 가능
console.log(cars, persons);

// Array 속성
console.log(cars.length, persons.length);
// 마지막 요소
console.log(cars[cars.length-1]);

//배열 합치기
console.log(cars.concat(persons));
console.log(cars, persons);
console.log(cars + persons);          // cars.toString() + persons.toString()
console.log([cars , persons]);        // Nested array

// 문자열 만들기(join)
console.log(cars.join(' | '));

// 마지막 요소 제거(pop) - 배열이 변함
let car = cars.pop();
console.log(car, cars);

// 마지막에 요소 추가(push) - 배열이 변함
cars.push('Benz');
// car 변수는 배열의 데이터가 있는 곳의 주소(reference)를 갖고 있으므로
// const로 변수 선언을 해도 데이터를 변경시킬 수 있음.
console.log(cars);

// 배열의 요소 순서를 뒤집기(reverse) - 배열이 변함
console.log(cars.reverse());
console.log(cars);
function reversString(str){                 // 문자열을 뒤집는 함수를 reverse() 사용
    /*let strArray = str.split('');
    strArray.reverse();
    let result = strArray.join('');
    return result;*/
    str.split('').reverse().join('');
}
console.log(reversString('기러기 스위스 토마토'));

// 화살표 함수로 바꾸기
let rs = str => str.split('').reverse().join('');
console.log(reversString('기러기 스위스 토마토'));

//배열의 일부분을 리턴(slice) - 배열 안변함
const fruits = ['apple', 'banana', 'cherr/y', 'grape'];
console.log(fruits.slice(1, 3));       // 시작 인덱스, 끝 인덱스 (끝은 포함하지 않음)
console.log(fruits.slice(2));          //끝 인덱스 생략하면 끝까지 다 나옴

// 배열의 요소를 정렬(sort) - 배열이 변함
console.log(cars);       // [ 'Benz', 'Volvo', 'Saab' ]
cars.sort();             // 오름차순 정렬
console.log(cars);       // [ 'Benz', 'Saab', 'Volvo' ]

// 내림차순 정렬
const numbers = [45, 67, 35, 97, 82];
numbers.sort().reverse()
console.log(numbers);

// 배열의 일부분을 삭제해서 리턴
const abFruits = fruits.splice(0, 2);
console.log(abFruits, fruits);

// 배열의 각 요소에 대해서 함수 적용
let result = numbers.map(function(num){ 
    return Math.sqrt(num);
});
console.log(result);
result = numbers.map(x => Math.sqrt(x));
console.log(result);

// 앞으로 해결해야 할 과제 - callback 함수, method chaining 적용
const objArray = [
    {name:'제임스', score:80, math:80, sci:70},
    {name:'마리아', score:90, math:90, sci:70},
    {name:'아담', score:70, math:80, sci:60},
    {name:'이브', score:65, math:70, sci:80}
]
//성적 순으로 정렬 해보세요
// math와 sci의 평균을 구하세요
//math점수가 80점 이상인사람