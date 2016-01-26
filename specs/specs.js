describe('Contact', function() {
  it("creates a new contact with the given properties", function () {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});
describe('Address', function(){
  it("create address for each contact", function(){
    var testAddress = new Address("123 4th St", "Portland", "Oregon");
    expect(testAddress.street).to.equal("123 4th St");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("Oregon");
  });
  it("add the fullAddress method to all Address", function() {
    var testAddress = new Address("400 sw 5th ave", "Portland", "Oregon");
    expect(testAddress.fullAddress()).to.equal("400 sw 5th ave Portland, Oregon");
  });
});
