function hasRepeatingdigits(N) {
    return (/([0-9]).*?\1/).test(N)
}  

console.log(
["pass123111word", "secure456password"].map(hasRepeatingdigits)
)