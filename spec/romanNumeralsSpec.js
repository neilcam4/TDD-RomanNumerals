describe("ROMAN NUMERALS", function(){
    let roman;
    let result;

    it("should return 1 with i", function(){
        roman = 'I'
        result = romanNumConvert(roman)
        expect(result).toEqual(1)
    })
    it("should return 5 with v", function(){
        roman = 'V'
        result = romanNumConvert(roman)
        expect(result).toEqual(5)
    })
    it("should return 10 with C", function(){
        roman = 'X'
        result = romanNumConvert(roman)
        expect(result).toEqual(10)
    })
    it("should return 50 with L", function(){
        roman = 'L'
        result = romanNumConvert(roman)
        expect(result).toEqual(50)
    })
    it("should return 100 with C", function(){
        roman = 'C'
        result = romanNumConvert(roman)
        expect(result).toEqual(100)
    })
    it("should return 500 with D", function(){
        roman = 'D'
        result = romanNumConvert(roman)
        expect(result).toEqual(500)
    })
    it("should return 1000 with M", function(){
        roman = 'M'
        result = romanNumConvert(roman)
        expect(result).toEqual(1000)
    })
    it("should return 2 with II", function(){
        roman = 'II'
        result = romanNumConvert(roman)
        expect(result).toEqual(2)
    })
    it("should return 3 with III", function(){
        roman = 'III'
        result = romanNumConvert(roman)
        expect(result).toEqual(3)
    })
    it("should return 11 with XI", function(){
        roman = 'XI'
        result = romanNumConvert(roman)
        expect(result).toEqual(11)
    })
    it("should return 52 with LII", function(){
        roman = 'LII'
        result = romanNumConvert(roman)
        expect(result).toEqual(52)
    })
    it("should return 4 with IV", function(){
        roman = 'IV'
        result = romanNumConvert(roman)
        expect(result).toEqual(4)
    })
    it("should return 9 with IX", function(){
        roman = 'IX'
        result = romanNumConvert(roman)
        expect(result).toEqual(9)
    })
})