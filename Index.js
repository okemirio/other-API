function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];  // Select the current element to be inserted
        let j = i - 1;  // Initialize a pointer to the previous element in the sorted subarray

        // Move elements of arr[0..i-1], that are greater than current, one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];  // Shift element rightwards
            j--;
        }

        arr[j + 1] = current;  // Place current element at its correct position in sorted array
    }

    return arr;
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
