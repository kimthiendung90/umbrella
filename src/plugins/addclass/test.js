// Testing the main file
describe(".addClass(name1, name2, ...)", function() {
  
  afterEach(function(){
    base.removeClass('bla');
    base.removeClass('blu');
  });
  
  it("should be defined", function() {
    expect(typeof base.addClass).to.equal('function');
  });

  it("can be called empty", function() {
    base.addClass();
  });

  it("adds a class", function() {
    expect(base.hasClass('bla')).to.equal(false);
    base.addClass('bla');
    expect(base.hasClass('bla')).to.equal(true);
  });

  it("adds several classes as arguments", function() {
    expect(base.hasClass('bla')).to.equal(false);
    expect(base.hasClass('blu')).to.equal(false);
    base.addClass('bla', 'blu');
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });

  it("adds several classes with an array", function() {
    expect(base.hasClass('bla')).to.equal(false);
    expect(base.hasClass('blu')).to.equal(false);
    base.addClass(['bla', 'blu']);
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });

  it("adds several classes separated by space", function() {
    expect(base.hasClass('bla')).to.equal(false);
    expect(base.hasClass('blu')).to.equal(false);
    base.addClass('bla blu');
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });

  it("adds several classes separated by comma", function() {
    expect(base.hasClass('bla')).to.equal(false);
    expect(base.hasClass('blu')).to.equal(false);
    base.addClass('bla,blu');
    expect(base.hasClass('bla')).to.equal(true);
    expect(base.hasClass('blu')).to.equal(true);
  });
});