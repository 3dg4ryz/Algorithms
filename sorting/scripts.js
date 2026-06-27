import { insertionSort } from './functions/insertion-sort.js'
import { selectionSort } from './functions/selection-sort.js'

// General Pre-Built
const arrLength = 10
const arr = new Array(arrLength)
  .fill(0)
  .map(() => Math.floor(Math.random() * arrLength))

// Insertion Sort
const insertionSortBtn = document.getElementById('insertionSortBtn')

insertionSortBtn.addEventListener('click', () => {
  const perfor = performance.now()
  const sortedArray = insertionSort(arr)
  console.log(sortedArray)
  console.log(`Insertion Sort took ${performance.now() - perfor} ms`)
})

// Selection Sort
const selectionSortBtn = document.getElementById('selectionSortBtn')

selectionSortBtn.addEventListener('click', () => {
  const sortedArray = selectionSort(arr)
  console.log(sortedArray)
})
