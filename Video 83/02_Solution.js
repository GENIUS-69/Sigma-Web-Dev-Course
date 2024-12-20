// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
    if (arr.length === 0) return [];

    const result = [];
    result.push(arr[0] * 2); // Double the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) { // Check for consecutive duplicates
            result.push(arr[i] * 2); // Double the current element if it's not a duplicate
        }
    }

    return result;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 3, 3, 4];
const outputArray = doubleTrouble(inputArray);
console.log(outputArray); // Output: [2, 4, 6, 8]