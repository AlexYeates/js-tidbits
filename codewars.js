// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy" a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" 
const longest = (s1, s2) => {
  return (s1 + s2)
    .split("")
    .filter((v, i, a) => {
      return a.indexOf(v) == i
    })
    .sort()
    .join("")
}

//Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.
const findShort = s => {
  let x = s
    .split(" ")
    .map((v, i, a) => {
      return a[i].length
    })
  return Math.min(...x)
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
const isValidWalk = walk => {
  if (walk.length !== 10) {
    return false
  } else {
    let n = 0,
      s = 0,
      w = 0,
      e = 0
    walk.forEach(el => {
      switch (el) {
        case 'n':
          n++
          break;
        case 's':
          s++
          break;
        case 'w':
          w++
          break;
        case 'e':
          e++
          break;
        default:
          break;
      }
    })
    if (n === s && e === w) {
      return true
    } else {
      return false
    }
  }
}

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