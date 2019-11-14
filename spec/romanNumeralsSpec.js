describe("ROMAN NUMERALS", function(){
    let num;
    let result;

    it("should return 1 with i", function(){
        num = 'I'
        result = romanNumConvert(num)
        expect(result).toEqual(1)
    })
    it("should return 5 with v", function(){
        num = 'V'
        result = romanNumConvert(num)
        expect(result).toEqual(5)
    })
    it("should return 10 with C", function(){
        num = 'X'
        result = romanNumConvert(num)
        expect(result).toEqual(10)
    })
    it("should return 50 with L", function(){
        num = 'L'
        result = romanNumConvert(num)
        expect(result).toEqual(50)
    })
    it("should return 100 with C", function(){
        num = 'C'
        result = romanNumConvert(num)
        expect(result).toEqual(100)
    })
})