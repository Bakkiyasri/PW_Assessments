let arr = [12, 32, 54, 87, 25, 98]; //Initialize array
let sum = 0;
//Loop through each element of array and calculate the sum
for (let i = 0; i < arr.length; i++) //array's last index is array's length - 1
{
    sum = sum + arr[i] // Accumulate total
}
console.log("Sum of numbers in array: ", sum);