const insertionSort = (originalArray) => {
    if (originalArray.length < 2)
        return originalArray;
    const arr = [...originalArray];
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return arr;
};
export { insertionSort };
