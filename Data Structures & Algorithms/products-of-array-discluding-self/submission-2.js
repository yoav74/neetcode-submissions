class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = [];
        let zeroFlag = 0;
        let arrProd = 0;
        for (let num of nums){
            if (num == 0){
                zeroFlag += 1;
                continue;
            }
            if (arrProd == 0)
                arrProd = num;
            else{
                arrProd *= num;
            }
        }
        for (let num of nums){
            if ((zeroFlag == 1 && num != 0) || (zeroFlag >= 2 )) {
                ans.push(0);
            }
            else if (zeroFlag == 1 && num == 0){
                ans.push(arrProd);
            }
            else{
                ans.push(arrProd / num);
            }
        }
        return ans

    }
}
