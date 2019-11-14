function romanNumConvert(num){
    let numerals = {I:1, V:5, X:10}
    let newArray = num.split('')
    let answer;
    console.log(newArray)
    newArray.forEach(num => {
        answer =  numerals[num]
    })
    return answer
    };
    