import { binarySearch } from './functions/binary-search.js'

// General Pre-Built
const arrLength = 100000
const arr = new Array(arrLength)
  .fill(0)
  .map(() => Math.floor(Math.random() * arrLength))

// Binary Search
const binarySearchBtn = document.getElementById('binarySearchBtn')

binarySearchBtn.addEventListener('click', () => {
  let perfor = performance.now()
  const elementToFind = arr[Math.floor(Math.random() * arrLength)]
  const sortedArray = arr.toSorted((a, b) => a - b)

  const findedElementIndex = binarySearch(sortedArray, elementToFind)
  console.log(findedElementIndex)
  console.log(`Binary Search took ${performance.now() - perfor} ms`)

  perfor = performance.now()
  const arrayFind = sortedArray.findIndex((el) => el === elementToFind)
  console.log(arrayFind)
  console.log(`Normal Search took ${performance.now() - perfor} ms`)
})
