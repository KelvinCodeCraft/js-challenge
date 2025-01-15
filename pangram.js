
// Returns true if the string is pangram else false
function checkPangram(str) {
    str = str.toLowerCase();

    mark = new Array(26).fill(false);

    // For indexing in mark[]
    let index;

    for (
        let i = 0;
        i < str.length;
        i++
    ) {
        if (
            "a" <= str[i] &&
            str[i] <= "z"
        )
            index =
                str.charCodeAt(i) -
                "a".charCodeAt(0);
      
        else continue;

        mark[index] = true;
    }

    for (let i = 0; i <= 25; i++)
        if (mark[i] == false)
            return false;

    return true;
}

let str ="The quick brown fox jumps over the lazy dog"

if (checkPangram(str) == true)
    console.log(str + "\nis a pangram");
else
    console.log(
        str + "\nis not a pangram"
    );

    