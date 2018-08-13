// Take a number and return it as a string in Expanded Form
const expandedForm = num => {  
  return num
  .toString()
  .split("")
  .reverse()
  .map((v, i, a) => {
    return a[i] = v + '0'.repeat(i)
  })
  .reverse()
  .filter(e => {
    return e.charAt(0) !== '0' 
  })
  .join(' + ')
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
const uniqueInOrder = (iterable) => {
  if (!Array.isArray(iterable)) {
    iterable = iterable.split("")
  }
  return iterable
    .map((v, i, a) => {
      return a[i] === a[i + 1] ? '' : v
    })
    .filter(e => {
      return e !== ''
    })
}

// Find duplicate characters and return ')' or '(' if they occure once
const duplicateEncode = word => {
  return word
    .toLowerCase()
    .split("")
    .map((v, i, a) => {
      return a.indexOf(v) === a.lastIndexOf(v) ? '(' : ')'
    })
    .join("")
}

// Find largest element in an array
const largestElement = array => {
  return Math.max(...array)
}

// Fina smallest element in an array
const smallestElement = array => {
  return Math.min(...array)
}