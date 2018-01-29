
describe('Javabuzz', function() {

  var javabuzz;

  it('returns Java for those divisble by 3', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.says(3)).toEqual("Java")
  })

  it('returns Buzz for those divisible by 5', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.says(5)).toEqual("Buzz")
  })

  it('returns JavaBuzz for those divisble by both 3 and 5', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.says(15)).toEqual("JavaBuzz")
  })
})
