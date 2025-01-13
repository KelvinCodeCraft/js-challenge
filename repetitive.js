function hasRepeatingdigits(N) {
    return (/([0-9]).*?\1/).test(N)
}  
  
console.log(
("pass123111word").map(hasRepeatingdigits)
)

console.log(
("secure456password").map(hasRepeatingdigits)
)