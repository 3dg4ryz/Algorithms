const binarySearch = (arr: number[], elementToFind: number): number | null => {

  let maxIndex = arr.length - 1
  let minIndex = 0

  while (minIndex <= maxIndex) {
    let halfIndex = Math.floor((maxIndex + minIndex) / 2)

    if (arr[halfIndex] === elementToFind) return halfIndex

    if (arr[halfIndex] > elementToFind) maxIndex = halfIndex - 1
    else minIndex = halfIndex + 1
  }

  return null
}

export { binarySearch }
