function isPalindrome(str) {
    let string1 = str.split(''); //Convert the input into characters
    let reverseString = '';
    // Loop them in reverse direction
    for (let i = string1.length - 1; i >= 0; i--) {
        reverseString = reverseString + string1[i]  //Concatenate the string
    }
    if (str === reverseString) //Hello === olleH
    {
        console.log(str, " is Palindrome");
    }
    else {
        console.log(str, " is not Palindrome");
    }
}

function isPalindromeDirectMethod(str) {
    string1 = str; //Hello
    string2 = str.split('').reverse().join(''); //olleH
    if (string1 === string2) {
        return true;
    }
    else {
        return false;
    }
}
console.log("\nDirect Method:");
console.log(isPalindromeDirectMethod("radar")) //radar --> true
console.log(isPalindromeDirectMethod("Radar")) //radaR --> false
console.log(isPalindromeDirectMethod("hello")) //elloh --> false
console.log("\nReverse the string in loop");
isPalindrome("radar") //radar
isPalindrome("Radar") //radaR
isPalindrome("Hello") //olleH