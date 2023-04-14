function fibs(num) {
  let arr = [];
  let a = 0;
  let b = 1;
  if (num >= 1) {
    arr.push(a) 
    if (num >= 2) {
      arr.push(b)
    }
  }
  for (let i = 2; i < num; i++) {
    let c = a + b
    a = b
    b = c
    arr.push(b)
  }
  return arr
}

console.log(fibs(8))

function fibsRecs(num, arr = []) {
  if (arr.length === 0) {
    return fibsRecs(num - 1, [0])
  } else if (arr.length === 1) {
    return fibsRecs(num - 1, [0, 1])
  } else if (num > 0) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fibsRecs(num - 1, arr)
  }
  return arr
} 

console.log(fibsRecs(8))