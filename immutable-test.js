const { List } = require('immutable');

const list1 = List([ 1, 2 ]);
const list2 = list1.push(333)
console.log(list1, list2)
console.log(list1.toJS(), list2.toJS())

// const arr1 = [1,2,3]
// const arr2 = arr1

// console.log(arr2 === arr1)

// arr1[0] = 100

// console.log(arr1 === arr2)

// const arr3 = [...arr1]

// console.log(arr3 === arr1)

// const arr4 = arr3.map(v => v + 100)

// console.log(arr4, arr3)