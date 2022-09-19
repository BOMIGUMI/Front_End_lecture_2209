/* 1. 두 개의 값이 다른 정수를 매개변수로 받아 두수 중 작은 수부터 +3씩 증가시켜서 배열로 만들어 반환하는 함수 ans1(num1, num2) 를 만드세요.
단, 배열에는 매개변수의 큰 수 보다 더 큰 수는 포함될 수 없다. 또한 이 함수를 검증하는 코드, 즉 ans1(2,10)과 ans1(12,3)의 결과를 출력하는코드도 만드세요. */



/* 2. ‘991205’와 같이 년월일 6자리 문자를 매개변수로 받아 만 나이를 반환하는 함수 ans2(birthday)를 만드세요.
또한 이 함수를 검증하는 코드, 즉 ans2(‘991003’)과 ans2(‘000919’)의 결과를 출력하는 코드도 만드세요. */
var ans2 = new Date("99/10/03");
var today = new Date();
var years = today.getFullYear() - ans2.getFullYear();
 
ans2.setFullYear(today.getFullYear());
 
if (today < ans2)
{
    years--;
}
console.log("당신은 만" + years + "세 입니다.");


// 3.라인의 수(홀수)를 매개변수로 받아 다음과 같은 모양을 출력하는 함수 ans3(num)을 만드세요. 예를 들어 ans3(5)의 결과는 다음과 같습니다.

for (let i = 5; i >= 1; i--) {
    if (i % 2 === 0) continue;
    console.log(' '.repeat((5 - i) / 2) + '*'.repeat(i) + ' '.repeat((5 - i) / 2));
}
for (let i = 3; i <= 5; i++) {
    if (i % 2 === 0) continue;
    console.log(' '.repeat((5 - i) / 2) + '*'.repeat(i) + ' '.repeat((5 - i) / 2));
}

/* 4. 매개변수로 물품 가격 여러 개가 문자열 하나로 전해지고, 각 가격은 세미콜론(;) 으로 구분되어 있습니다. 이 가격을 배열로 만들고, 내림차순으로 정렬하여
 반환하는 함수 ans4(str) 함수를 만드세요. 또한 이 함수를 검증하는 코드로 ans4(‘51900;83000;158000;367500;250000;59200;128500;1304000’)의 결과를
출력하는 코드도 만드세요. */

var ans4 ='51900;83000;158000;367500;250000;59200;128500;1304000';
var arr = ans4.split(';')
console.log(arr);
arr.sort(function(a,b) {
    return b-a;
});
console.log(arr);


/* 5. id, 이름, 전화번호, email 을 속성으로 갖고 toString() 메쏘드를 갖는 Member 클래스를 만드세요.
 또한 이 클래스로 james와 maria 객체를 생성하고, toString() 메쏘드를 사용하여 객체안의 속성 정보를 출력하는 코드도 만드세요. */

class Member {
    constructor (id, name, call, email) {
        this.id = id;
        this.name = name;
        this.call = call;
        this.email = email;
    }
}
let james = new Member('1234', 'james', '01012341234', 'james01@naver.com')
let maria = new Member('5678','maria', '01056785678', 'maria44@naver.com')

Member.prototype.toString = function memberToString() {
    return `${this.id}, ${this.name}, ${this.call}, ${this.email}`;
};

console.log(james.toString());
console.log(maria.toString());