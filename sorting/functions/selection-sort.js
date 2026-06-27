const selectionSort = (originalArray) => {
    if (originalArray.length < 2)
        return originalArray;
    const arr = [...originalArray];
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndx = i;
        let min = arr[minIndx];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                minIndx = j;
                min = arr[minIndx];
            }
        }
        if (i === minIndx)
            continue;
        [arr[i], arr[minIndx]] = [arr[minIndx], arr[i]];
    }
    return arr;
};
export { selectionSort };
