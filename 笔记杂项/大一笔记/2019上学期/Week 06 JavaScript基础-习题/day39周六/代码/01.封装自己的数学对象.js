let myMath = {
    PI: 3.1415926535,
    max: function () {
        let max = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i]
            }
        }
        return max;
    },
    min: function () {
        let min = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] < min) {
                min = arguments[i]
            }
        }
        return min;
    }
}
console.log(myMath.PI)
console.log(myMath.max(55, 6, 858, 2, 6, 3, 1, 5))
console.log(myMath.min(55, 6, 858, 2, 6, 3, 1, 5))

//求数组中的最大值
let arr = [5, 66, 8, 1, 64, 6, 3, 8888]
console.log(Math.max(...arr))
console.log(Math.min(...arr))
