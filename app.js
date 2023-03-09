console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let num = 1; num <= 100; num++){
    if(num%2!=0){
        console.log(num);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let number = 1; number <= 100; number++){
    if(number % 3 == 0 && number % 5 == 0){
        console.log(`${number} FIZZBUZZ`);
    }else if(number % 3 == 0){
        console.log(`${number} FIZZ`)
    }else if(number % 5 == 0){
        console.log(`${number} BUZZ`)
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let num3 = 1;
while(num3 <= 100){
    if(num3 % 2 != 0){
      console.log(num3);
    }
    num3++;
}
let num4 = 1;
while(num4 <= 100){
    if(num4 % 3 == 0 && num4 % 5 == 0){
        console.log(`${num4} FIZZBUZZ`);
    }else if(num4 % 3 == 0){
        console.log(`${num4} FIZZ`)
    }else if(num4 % 5 == 0){
        console.log(`${num4} BUZZ`)
    }
    num4++;
}
let num5 = 1;
do{
    if(num5 % 2 != 0){
        console.log(num5);
      }
      num5++;
}while(num5 <= 100)
let num6 = 1;
do{
    if(num6 % 3 == 0 && num6 % 5 == 0){
        console.log(`${num6} FIZZBUZZ`);
    }else if(num6 % 3 == 0){
        console.log(`${num6} FIZZ`)
    }else if(num6 % 5 == 0){
        console.log(`${num6} BUZZ`)
    }
    num6++;
}while(num6 <= 100)
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let x = 0;
for(let i = 0; i <= n; i++){
    x++;
    if(i == value){
        console.log('Found value!');
        break;
    }
}
if(x == n + 1){
    console.log('Did not find value')
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n1 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(let i = start; i <= n1; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log(`${i} FIZZBUZZ`)
    }else if(i % fizzDivisor == 0){
        console.log(`${i} FIZZ`)
    }else if(i % buzzDivisor == 0){
        console.log(`${i} BUZZ`)
    }
}