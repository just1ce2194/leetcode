/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sortedNums = nums.sort((a, b) => {
        return a > b ? 1 : (a < b ? -1 : 0);
    });

    var result = 0;
    
    for (var i = 0; i < nums.length; i += 2) {
        result += Math.min(sortedNums[i], sortedNums[i + 1]);
    }

    return result;
};

var input = [1, 4, 2, 3];

console.log(arrayPairSum(input));