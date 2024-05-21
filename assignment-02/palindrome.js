
//program for palindrome
function isPalindrome(string) {

    let rev = "";

    for (let i = string.length - 1; i >= 0; i--) {
        rev += string[i];
    }
    if (rev == string) {
        return true;
    } else {
        return false;
    }
}

// to print output 
const string1 = isPalindrome("madam");
console.log("madam string is ", string1);

const string2 = isPalindrome("rama");
console.log("madam string is ", string2);
