import { insertionSort } from './functions/insertion-sort.js'

// Insertion Sort
const insertionSortBtn = document.getElementById('insertionSortBtn')

insertionSortBtn.addEventListener('click', () => {
  const arrLength = 100000
  const arr = new Array(arrLength)
    .fill(0)
    .map(() => Math.floor(Math.random() * arrLength))

  const perfor = performance.now()
  const sortedArray = insertionSort(arr)
  console.log(`Insertion Sort took ${performance.now() - perfor} ms`)
})
