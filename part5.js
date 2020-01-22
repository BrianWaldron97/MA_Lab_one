// hello function
function hello() {
    console.log("Hello");
}
hello();
// saySomething function
function saySomething(x) {
    console.log(x);
}
saySomething("Hello world");
// charCount function
function charCount(word) {
    return word.replace(/\s/g, '').length;
}
var myCount = charCount("Test 1");
console.log(myCount);
function both_charCount(word, spaces) {
    if (spaces) {
        return word.replace(/\s/g, '').length;
    }
    else {
        return word.length;
    }
}
var bothchar = both_charCount("test 1", false);
var bothchar1 = both_charCount("test 1", true);
var bothchar2 = both_charCount("test 1");
console.log(bothchar);
console.log(bothchar1);
console.log(bothchar2);
