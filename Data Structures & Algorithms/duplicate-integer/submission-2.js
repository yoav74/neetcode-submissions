class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = new Set();
        for (const num of nums) {
            if (!numsMap.has(num))
            numsMap.add(num);
            else{
                return true;
            }
        }
        return false;

    }
}

