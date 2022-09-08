// 10보다 큰 정수를 입력으로 받아 약수를 모드 배열로 만들어서 출려하세요.

 let input = 12;
 let divisors = []; // let 약수 = 빈리스트
 for (let i = 1; i<=input; i++) {
    if (input % i == 0)
        divisors.push(i);
 }
console.log(divisors);