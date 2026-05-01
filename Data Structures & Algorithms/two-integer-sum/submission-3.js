class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 2)
            return null;
        let numMap = new Map();
        for (let i = 0; i< nums.length; i++){
            if (!numMap.has(nums[i])){
                numMap.set(nums[i],[i]);
            }
            else 
            numMap.get(nums[i]).push(i);
        }
        console.log(numMap);
        for (let i = 0; i < nums.length - 1; i++){
            let remainder = target - nums[i];
            if (numMap.has(remainder)){
                if (remainder != nums[i])
                return [i,numMap.get(remainder)[0]];
                else{
                    if (numMap.get(remainder).length > 1)
                    return [i,numMap.get(remainder)[1]];
                }
            }
        }
        
    }
}
