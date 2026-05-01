class Solution:
    def isValid(self, s: str) -> bool:
        counter = 0
        if len(s) % 2 == 1:
            return False
        openArr = []
        for char in s:
            if char == '(' or char =='{' or char == '[':
                openArr.append(char)
                counter = counter + 1
            else:
                if (len(openArr) > 0):
                    openChar = openArr.pop()
                    counter = counter + 1
                    if not openChar == '[' and char == ']':
                        return False
                    elif not openChar == '(' and char == ')':
                        return False
                    elif not openChar == '{' and char == '}':
                        return False
        if counter == (len(s)) and len(openArr) == 0:
            return True
        else:
            return False
            
        