import {User} from "../src/planets"

describe("User", function(){
  let reuseableUserBD;
  beforeEach(function(){
    reuseableUserBD = new User('earth', 'mercury', 'venus', 'mars', 'jupiter');
    console.log('pickle', reuseableUserBD);
  });

  it("should return seconds alive when years alive is provided", function(){
    console.log('answer',reuseableUserBD.ageInSeconds(2));
    expect(reuseableUserBD.ageInSeconds(2)).toEqual(3.154e+7 * 2);
  });
});
