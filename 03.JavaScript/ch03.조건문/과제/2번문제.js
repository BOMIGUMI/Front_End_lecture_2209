const num = Math.ceil(Math.random() * 2000);
if (num % 400 === 0) {
    console.log(num, '윤년');
} else if (num % 100 === 0) {
    console.log(num, '평년');
} else if (num % 4 === 0) {
    console.log(num, '윤년');
} else {
    console.log(num, num);
}   