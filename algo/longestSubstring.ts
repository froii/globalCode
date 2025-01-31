// O(n)
// the largest length in which there are no identical characters
const longestSubstring = (value: string) => {
  let answer = 0, left = 0, right = 0;
  const set = new Set()

  while (right < value.length ) {
      const s = value.charAt(right)
      if(!set.has(s)) {
          set.add(s)
          answer = Math.max(answer, right - left + 1)
          right ++
      } else {
          while (set.has(s)) {
              set.delete(value.charAt(left))
              left++
          }
      }
  }
    console.log(set)
  return answer
}


console.log(longestSubstring("asfasfaafqrqrwqasfafqweraaaaaaawwww"))
console.log(longestSubstring("dabcabcabcd"))