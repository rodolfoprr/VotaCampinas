describe('Filter - Capitalize', function() {
  var $filter = null;

  beforeEach(function() {
    module('votaCampinas');

    inject(function(_$filter_) {
      $filter = _$filter_;
    });
  });

  it('Deve fazer alguma coisa', function() {
    expect(1).toBe(1);
  });

});
