// Define a helper function to find the maximum number in an array
function findMax(array) {
    let max = array[0]; // Assume the first element is the maximum
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; // Update max if a larger number is found
        }
    }
    return max;
}

// Example usage of the helper function
const numbers = [3, 7, 2, 9, 1, 5];
const maxNumber = findMax(numbers);
console.log("The maximum number in the array is:", maxNumber);
