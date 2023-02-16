module.exports = function reverse(num) {
    let number = Math.abs(num);
    let arr = number.toString().split("");
    let reversed = arr.reverse().join("");
    if (num < 0) {
    }
    return reversed;
};
