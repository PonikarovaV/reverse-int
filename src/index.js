module.exports = function reverse (n) {
    if (n >= 0) {
        return Number(String(n).split('').reverse().join(''));
    }
    if (n < 0) {
        let positive = n * -1;
        return Number(String(positive).split('').reverse().join(''));
    }
}
