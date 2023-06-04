function rotateArray(array, k) {
    const length = array.length;
    const rotations = k % length;

    for (let i = 0; i < rotations; i++) {
        const lastElement = array[length - 1];
        for (let j = length - 1; j > 0; j--) {
            array[j] = array[j - 1];
        }
        array[0] = lastElement;
    }

    return array;
}

const arr = [3, 8, 9, 7, 6]
console.log(rotateArray(arr, 3));