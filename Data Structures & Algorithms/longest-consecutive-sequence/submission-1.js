class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0)
            return 0;
        nums = nums.sort((a,b) => a - b);
        let maxSeq = 1;
        let tempSeq = 1;
        for (let i = 0; i < nums.length - 1; i++){
            if (nums[i+1] - nums[i] == 1){
                tempSeq++
            }
            else if (nums[i+1] - nums[i] == 0)
                continue;
            else{
                if (tempSeq > maxSeq)
                    maxSeq = tempSeq;
                tempSeq = 1;
            }
        if (tempSeq > maxSeq)
                    maxSeq = tempSeq;
        }
        return maxSeq
    }
}
