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
    it("should return 5 with v", function(){
        num = 'X'
        result = romanNumConvert(num)
        expect(result).toEqual(10)
    })
})