let string1 = "Hello World";
let string2 = " fly me to the moon ";

//Find the length of the last word
function findLengthOfLastWord(str) {
    let string = str.trim(); //remove whitespace from both ends (beginning and end) of a string
    arr = string.split(" "); //split string into array of words ["Hello", "World"]
    lastWord = arr[arr.length - 1]; //Array's last index = array's length-1
    let lengthOfLastWord = lastWord.length;
    console.log("Length of Last word:\"", str, "\" is ", lengthOfLastWord);
}

//Find the given strings are Anagram => strings should have same length, same characters and same frequency.Case sensitive
function isAnagram(str1, str2) //Silent Listen
{
    //remove whitespace from both ends (beginning and end) of a string
    let string1 = str1.trim();
    //removes all whitespaces like spaces,tab, new lines; 
    // \s --> whitespace character + --> one or more consecutive whitespaces --> global search
    let string2 = str2.replace(/\s+/g, '');
    if (string1.length === string2.length) {
        //split string by characters and sort in ascending order
        let sortString1 = string1.toLowerCase().split('').sort().join(''); //eilnst
        let sortString2 = string2.toLowerCase().split('').sort().join(''); // eilnst
        if (sortString1 === sortString2) {
            console.log(str1, " and ", str2, "is an Anagram");
        }
        else {
            console.log(str1, " and ", str2, "is not an Anagram");
        }
    }
    else {
        console.log(str1, " and ", str2, "is not an Anagram");

    }
}
function isAnagramCaseSensitive(str1, str2) //Silent Listen
{
    let sortString1 = str1.split('').sort().join(''); //Seilnt 
    let sortString2 = str2.split('').sort().join(''); //eilnst
    console.log("Sorted strings: ", sortString1, sortString2);
    if (sortString1 === sortString2) {
        console.log(str1, " and ", str2, "is an Anagram");
    }
    else {
        console.log(str1, " and ", str2, "is not an Anagram");
    }

}
console.log("\nFIND LENGTH OF LAST WORD");
findLengthOfLastWord(string1)
findLengthOfLastWord(string2)

console.log("\nSTRING ANAGRAM AFTER CONVERTING TO SAME CASE");
isAnagram("hello", "world")
isAnagram("silent", "listen")
isAnagram("SILENT", "listen")

console.log("\nSTRING ANAGRAM WITHOUT CONVERTING TO SAME CASE");
isAnagramCaseSensitive("Silent", "listen")
isAnagramCaseSensitive("SILENT", "listen")