function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  if (s.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== map[s[i]]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false
console.log(isValid("{[]}")); //true
console.log(isValid("((()))")); //true
console.log(isValid("((())")); //false
