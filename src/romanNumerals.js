function romanNumConvert(num){
    let numerals = {I:1, V:5, X:10, L:50, C:100, D:500,
        M:1000
    }
   
    let newArray = num.split('')
    let answer=[]
    console.log(newArray)
    newArray.forEach(num => {
        answer.push(numerals[num])
    })
    console.log(answer)
    let finalAnswer = answer.reduce(function(sum,num){
        return sum+=num
       
    })
    return finalAnswer
   
    };
    