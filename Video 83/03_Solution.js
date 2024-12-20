// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
function mirrorString(original) {
    // Reverse the original string
    const reversed = original.split('').reverse().join('');
    // Append the reversed string to the original
    return original + reversed;
}

// Example usage:
const originalString = "hello";
const mirroredString = mirrorString(originalString);
console.log(mirroredString); // Output: 