class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numMap = new Map();
        let res = [];
        for (let num of nums){
            if (!numMap.has(num)){
                numMap.set(num,1);
            }
            else{
                numMap.set(num,numMap.get(num) + 1);
            }
        }
        let sortedArr = ([...numMap.entries()].sort((a,b) => b[1] - a[1]));
        for (let i = 0; i < k; i++){
            res.push(sortedArr[i][0]);
        }
        return res;
    }
}
