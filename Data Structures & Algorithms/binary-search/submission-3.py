class Solution:
    def search(self, nums: List[int], target: int) -> int:
        counter = 0
        start = 0
        end = len(nums) - 1
        while (start <= end):
            counter = counter + 1
            print(start,end)
            index = start + (end - start) // 2
            tempNum = nums[index]
            if nums[index] == target:
                return index
            elif nums[index] > target:
                end = index - 1
            else:
                start = index + 1
        return -1
