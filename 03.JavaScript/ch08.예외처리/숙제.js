// 1.번문제
let num1 = Math.ceil(Math.random() * 19) + 1;
let num4 = Math.ceil(Math.random() * 20) + 10;
num3 = [];
while(true) {
    if (num1 +4 <= num4) {
        for (let i=num1; i<=num4; i++) {
            num3.push(2**i);
        }
        num3.slice(1, 1);
        num3.slice(-2, 1);
    break;
    }
}
console.log(num3);

//2.번문제
let count = 0;

const string = 'the grown-ups response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.';
const string1 = string.split(' ');
var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
for(let i in string1) {
    if(string1[i].replace(reg,'') == 'the') {
        count += 1;
    }
}
console.log(count);

// 3번 문제
let num = Math.floor(Math.random() * 90) + 10;
let num2 = Math.floor(Math.random() * 90) + 10;
let se = new Set();
console.log(num,num2);
for(let i =1; i<= Math.max(num,num2);i++){
    if(num % i == 0 && num2 % i ==0){
        se.add(i);
    }
}
console.log(se);


// 4번문제
let manufacturer = [];
let model = [];

const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];
for (let i in cars) {
    console.log(i, cars[i]);
    let cars1 = cars[i].split(' ');
    manufacturer.push(cars1[0]);
    model.push(cars[i].slice(cars1[0].length+1));

}

console.log(manufacturer);
console.log(model);