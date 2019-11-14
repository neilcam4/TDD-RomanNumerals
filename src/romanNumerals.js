function romanNumConvert(roman){
    let newArray = roman.split('')
    let i = newArray.indexOf('I')
    let v = newArray.indexOf('V')
    let l = newArray.indexOf('L')
    let x = newArray.indexOf('X')
    let c = newArray.indexOf('C')
    let m = newArray.indexOf('M')
    return total(newArray) 
}

function total(newArray){
    let answer = []
    let numerals = {I:1, V:5, X:10, L:50, C:100, D:500,
        M:1000
    }
    newArray.forEach(num => {
        answer.push(numerals[num])
    })
    let finalAnswer = answer.reduce(function(sum,num){
        return sum+=num
    })
    return finalAnswer 
}