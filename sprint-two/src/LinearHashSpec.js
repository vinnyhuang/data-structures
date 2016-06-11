describe('linearHash', function() {
  var linearHash;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    linearHash = new LinearHash();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(linearHash.insert).to.be.a('function');
    expect(linearHash.remove).to.be.a('function');
    expect(linearHash.retrieve).to.be.a('function');
  });

  it('should store values that were inserted', function() {
    linearHash.insert('Steven', 'Seagal');
    expect(linearHash.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    linearHash.insert('Steven', 'Spielberg');
    expect(linearHash.retrieve('Steven')).not.to.equal('Seagal');
  });

  it('should overwrite values that have the same key', function() {
    linearHash.insert('Bob', 'Loblaw');
    linearHash.insert('Bob', 'Barker');
    expect(linearHash.retrieve('Bob')).to.equal('Barker');
  });

  it('should not contain values that were removed', function() {
    linearHash.insert('Steven', 'Tyler');
    linearHash.remove('Steven');
    expect(linearHash.retrieve('Steven')).to.equal(undefined);
  });

  it('should handle hash function collisions', function() {
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    linearHash.insert(v1, v1);
    linearHash.insert(v2, v2);
    expect(linearHash.retrieve(v1)).to.equal(v1);
    expect(linearHash.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Advanced! Remove the extra "x" when you want the following tests to run)
  it ('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      linearHash.insert(firstName, lastName);
    });
    expect(linearHash._limit).to.equal(16);
  });

  it ('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0];
      var lastName = person[1];
      linearHash.insert(firstName, lastName);
    });
    expect(linearHash._limit).to.equal(16);
    linearHash.remove('George');
    linearHash.remove('Dr.');
    linearHash.remove('Steven');
    linearHash.remove('John');
    linearHash.remove('Mr.');
    expect(linearHash._limit).to.equal(8);
  });
});
