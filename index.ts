export function duplicateCount(text: string): number{
  //...
  let hash:{[n:string]: number} = {}
  let total = 0

  text.split('').forEach( char => {
    char.toUpperCase()
    if (!hash[char.toUpperCase()]) {
      hash[char.toUpperCase()] = 1
    } else {
      hash[char.toUpperCase()] ++
    }
  })

  for (let key in hash) {
    if (hash[key] > 1) total ++
  }
  return total
}

console.log(
  duplicateCount("aabBcde")
)