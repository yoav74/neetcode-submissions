class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        for(let i = 0; i < nums.length; i++){
            if (nums[i] == val){
                nums.splice(i,1);
                i = i - 1 ;
                console.log(nums,i);
            }
        }
        console.log(nums);
        return nums.length;
    }
}
