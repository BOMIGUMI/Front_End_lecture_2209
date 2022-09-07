const currentTime = new Date();

if (currentTime.getHours() < 12) {
    console.log(`${currentTime.toLocaleString()}은/는 오전 입니다.\n`);
} else {
    console.log(`${currentTime.toLocaleString()}은/는 오후 입니다.\n`);
}

// if문 다음에 Single Statement가 나오면 { }를 쓰지 않아도 됨
//그러나 이 경우에는 아래와 같은 3항 연산자를 이용하는 것이 바람직함
if (currentTime.getHours() < 12)
    console.log(`${currentTime.toLocaleString()}은/는 오전 입니다.\n`);
else
    console.log(`${currentTime.toLocaleString()}은/는 오후 입니다.\n`);

// 조건 연산자, 3항 연산자
const amPm = currentTime.getHours() < 12 ? '오전' : '오후'
console.log(`${currentTime.toLocaleString()}은/는 ${amPm}입니다.\n`);

// (파이썬) a = 값1 if 조건 else 값2 ==> (자바 스크립트) 조건 ? 값1 : 값2