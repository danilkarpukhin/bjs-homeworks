'use strict';

function sleep(milliseconds)
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays (arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)){
    if (arr1.length == arr2.length) {
      return arr1.length == arr2.length && arr1.every((number, index) => number == arr2[index]);
    } else {
    return false;
    }
  } else {
    console.log('Error: arr1, arr2 isn`t Array');
  }
}


  function memorize(fn, limit) {
    const memory = [];
  
    return function (...args) {
      let find = memory.find(element => compareArrays(element.args, args));
  
    if (find) {
      console.log('Вызов из памяти');
      return find.result;
    }
    
    let result = fn(...args);
  
     if (memory.length > limit) {
       memory.shift();
       memory.push({args, result});
      } else {      
        memory.push({args, result})            
      }
      return result;
    }
  }
  

let timeTestArr = [[1, 2, 3], [2, 5], [1, 2, 3], [2, 5], [7, 8, 13, 1], [2, 5]];
let mSum = memorize(sum, 5);


let label = 'abs';

function testCase (func) {
  console.time(label);
  for (let i = 0; i < 100; i++) {
      func(...timeTestArr);
  }
  console.timeEnd(label);
}
testCase(mSum);
testCase(sum);