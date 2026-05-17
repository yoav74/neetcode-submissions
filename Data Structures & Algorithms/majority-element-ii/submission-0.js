class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let numMap = new Map;
        let majorElements = [];
        let majorNum = nums.length / 3;
        for (let num of nums){
            numMap.set(num,(numMap.get(num)| 0) + 1);
            if (numMap.get(num) > majorNum){
                if(!majorElements.includes(num))
                    majorElements.push(num);
            }
        }
        return majorElements;
    }
}
