//console.log('hello')
//document.write('hello')
//alert('hello')
//prompt('hello')

//const a = 10
//let b = 'text'

//const c = false
//console.log(typeof(c))

//array

//const arr = [1,4,-6,6]

//arr[1]
//console.log(arr);
//console.log(arr.length);

//arr[3] = 'hello'
//arr[4] = true

//console.log(arr[1]);
//console.log(arr.length);

// const arr = [1, 4, -6, 6]

// arr.push(12)
// arr.push('milk','orange',true)
// arr.pop()
// arr.unshift('ttt')
// arr.shift()


// console.log(arr)

// const num1 = prompt()
// const num2 = prompt()
// const num3 = prompt()
// const arrNum = []
//const array = [1,4,2,5,3]
// arrNum.push(num1,num2,num3)
// console.log(arrNum)

// const newArr = []
// newArr.push(array[0]**2,array[1]**2,array[2]**2,array[3]**2,array[4]**2);
// for(let i = 0 ; i < arr2.length;i++){
    // newArr.push(array[i])
// }
// console.log(array);
// console.log(newArr);

// for(let a = 10; a >= 0; a--){
    // console.log(a);
// }

// const arr2 = [12,34,-56,36,45]

// for(let i = 0 ; i < arr2.length;i++){
//     console.log(arr2[i]);
// }
const arr = [12,-34,9,89,-3,45,-2,66,34,12,22,35,3,6,9]
// Положительные числа
// for (let i = 0;i < arr.length;i++) {
//     if(arr[i]>0){
//         console.log(arr[i]);
//     }  
// }
// Чётные числа
// for (let i = 0;i < arr.length;i++) {
//     if(arr[i]%2 == 0){
//         console.log(arr[i]);
//     }  

// }

// Нечётные числа
// const newArr = []
// for (let i = 0;i < arr.length;i++) {
//     if(arr[i]%2 !== 0){
//         console.log(arr[i]);
//         newArr.push(arr[i])
//     }  
    
// }
// console.log(newArr)

// for (let i = 0;i < arr.length;i = i - 2) {
//     if(arr[i]%3 == 0){
//         console.log(arr[i]);
//     }  

// }

// for (let i  = arr.length - 1;i >=0;i=i-2) {
//     if(arr[i]%2 !== 0){
//         console.log(arr[i]);
//         // newArr.push(arr[i])
//     }
// }  
// Сумма положительных чисел
    // let num = 0
    // for (let i = 0;i < arr.length;i++) {
    //     if(arr[i]> 0){
    //     num = num + arr[i]
    //         console.log(arr[i]);
    //     }  
    // }
    // console.log(num);
//Сумма чётных чисел
    // let num1 = 0
    // for (let i = 0;i < arr.length;i++) {
    //     if(arr[i]%2==0){
    //     num1 = num1 + arr[i]
    //         // console.log(arr[i]);
    //     }  
    // }
    // console.log(num1);

    
    // Найти сумму четных и нечетных чисел из массива 
    let number1 = 0
    let number2 = 0
    for (let i = 0;i < arr.length;i++) {
        if(arr[i]%2==0){
        number1 = number1 + arr[i]
             console.log(arr[i]);
        }  else if(arr[i]%2 !==0){
            number1 = number2 + arr[i]
            console.log(arr[i]);

        }
    }
    console.log(number1);
    console.log(number2);
        //и вывести разницу между ними. Вычесть из большего меньшее.
    let result = 0;
        if(number1>number2){
            result = number1-number2;
        }else if(number1<number2){
            result = number2 - number1
        }
        console.log(result)