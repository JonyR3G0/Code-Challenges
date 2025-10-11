/**
 * Given two strings ransomNote and magazine, return true if ransomNote
 * can be constructed 
 * by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * @author Jonathan Reyes
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let hashMaga = []
    let hashRansom = []
    let status = []
    for (let n = 0; n < magazine.length; n++) {
        const answ = hashMaga.findIndex((element) => element.letter === magazine[n])
        if (answ === -1) {
            hashMaga.push({ letter: magazine[n], quant: 1 })
            continue
        }
        hashMaga[answ].quant = hashMaga[answ].quant + 1
    }
    for (let n = 0; n < ransomNote.length; n++) {
        const answ = hashRansom.findIndex((element) => element.letter === ransomNote[n])

        if (answ === -1) {
            hashRansom.push({ letter: ransomNote[n], quant: 1 })
            continue
        }
        hashRansom[answ].quant = hashRansom[answ].quant + 1
    }
    console.log(hashMaga, hashRansom)
    for (let n = 0; n < hashRansom.length; n++) {
        const answ = hashMaga.findIndex((element) => element.letter === hashRansom[n].letter)
        if (answ === -1 || hashMaga[answ].quant >= hashRansom[n].quant === false) return false
        // console.log(`Buscando letra ${hashMaga[answ].letter}`)
    }
    return true
};