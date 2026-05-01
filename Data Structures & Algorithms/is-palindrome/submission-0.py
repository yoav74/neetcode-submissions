class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = ''.join(e for e in s if e.isalnum())
        for i in range(len(s)// 2):
            if s[i] != s[-i - 1]:
                return False
        return True

        