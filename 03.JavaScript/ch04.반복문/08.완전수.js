// Perfect Number
// 10000이하의 완전수를 구하세요

for (let i=2; i<=10000; i++) {
    // 약수 찾기
    let divisors = [];
    for (let k=1; k<i; k++) {
        if (i % k == 0) {
            divisors.push(k);
        }
    }
    // 약수의 합 구하기
    let sum = 0;
    for (let div of divisors) {
        sum += div;
    }
    // 자기 자신과 같은가 ?
    if (sum == i) {
        console.log(i);
        console.log(divisors.toString());
    }
}