class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = [];
        let words = new Map();
        for (let i = 0; i < strs.length ; i++){
            let innerWord = strs[i].split('').sort().join();
            if (!words.has(innerWord))
                words.set(innerWord,[i]);
            else{
                words.get(innerWord).push(i);
            }
        }
        for (let [,val] of words){
            let innerArr = [];
            for (let idx of val){
                innerArr.push(strs[idx]);
            }
            ans.push(innerArr);
        }
         return ans;
    }
}
