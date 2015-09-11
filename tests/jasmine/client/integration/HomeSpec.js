describe('Click', function() {
  beforeEach( function(){
    Session.set('counter', 0);
  });

  it("should increment the counter",function(done){
    $('button').click();
    Meteor.defer(function(){
      expect( parseInt($('.counter')[0].innerHTML) ).toBe( 1 );
      done();
    });
  });
  
  it("failing test",function(){
    expect( 1 ).toBe( 0 );
  });
});
