function merge(arr) {
  if (arr.length === 1) {
    return arr
  } 

  let middle = Math.floor(arr.length / 2)

  let left = merge(arr.slice(0, middle))
  let right = merge(arr.slice(middle))
  let sorted = []
  
  while (left[0] && right[0]) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  if (left[0]) {
    left.forEach(element => {
      sorted.push(element)
    });
  } else {
    right.forEach(element => {
      sorted.push(element)
    });
  }

  return sorted
}

console.log(merge([23, 45, 12, 87, 56, 34, 9, 76, 44, 31, 5, 17, 89, 52, 27, 61, 72, 99, 88, 2, 48, 67, 41, 98, 10, 19, 38, 81, 66, 29, 78, 7, 54, 95, 64, 22, 15, 83, 36, 71, 43, 57, 97, 14, 75, 51, 32, 94, 42, 70]))