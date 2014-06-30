var expect = chai.expect;

/**
 * Testing prototype
 */

describe('Prototype', function () {
  
  /**
   * Please create a Developer Class that extends from Person
   */

  it('should extend and print developer\'s name', function () {
    var Person
      , Developer
      , devName = 'Dev Name'
      , devLastName = 'Last N'
      , newDeveloper = {};

    Person = function (fname, lname) {
      this.name = fname +' '+ lname;
    };

    Person.prototype.getName = function () {
     return this.name;
    };

    expect(newDeveloper instanceof Person).to.be.true;
    expect(newDeveloper.constructor === Developer).to.be.true;
    expect(typeof newDeveloper.getName === 'function').to.be.true;
    expect(newDeveloper.getName() === 'Dev Name Last N').to.be.true;
  });

  /**
   * Please explain what is the issue here and why this is happening
   */

  it('should have correct values, please fix and explain why this is happening', function () {
    var Person
      , p1
      , p2;

    Person = function (fname, lname) {
      this.name = fname +' '+ lname;
    };

    Person.prototype.getName = function () {
     return this.name;
    };

    Person.prototype.direction = {
      lat: 0,
      long: 0
    };

    p1 = new Person('Walter', 'Chacon');
    p2 = new Person('Jonathan', 'B');

    p1.direction.lat = 1;
    p1.direction.long = 1;

    expect(p2.direction.lat === 0).to.be.true;
    expect(p2.direction.long === 0).to.be.true;
    expect(p1.direction.lat === 1).to.be.true;
    expect(p1.direction.long === 1).to.be.true;
  });

  /**
   *
   */

  it('should return correct name', function () {
    var Person
      , p1;

    Person = function (fname, lname) {
      this.name = fname +' '+ lname;
    };

    Person.prototype.getName = function () {
     return this.name;
    };

    Person.prototype.printName = function () {
      var privatefn = function () {
        return this.name;
      };

      return privatefn();
    };

    p1 = new Person('New', 'Person');
    console.log(p1);

    expect(p1.printName() === 'New Person').to.be.true;
  });

});

/**
 * Testing async
 */

describe('Async', function () {

  // Please explain what is the issue
  it('should print correct value', function () {
    var result = 0;

    setTimeout(function () {
      result = 1;
    }, 0);

    expect(result === 1).to.be.true;
  });

});

/**
 * Testing closure
 */

describe('Closure', function () {

  // Please explain what is the issue here and fix it
  it('should print correct messages', function () {
    var messages = [];

    for(var i=0; i<5; i++) {
      messages.push(function () {
        return 'message #'+ i;
      });
    }

    expect(messages[0]() === 'message #0').to.be.true;
    expect(messages[1]() === 'message #1').to.be.true;
    expect(messages[2]() === 'message #2').to.be.true;
    expect(messages[3]() === 'message #3').to.be.true;
    expect(messages[4]() === 'message #4').to.be.true;
  });

});
