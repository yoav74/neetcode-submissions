class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let numMap = new Map();
        let majorityNum = nums.length / 2;
        for (let num of nums) {
            numMap.set(num, (numMap.get(num) || 0) + 1);
            if (numMap.get(num) >= majorityNum) return num;
        }
    }
}
