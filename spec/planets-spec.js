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

  it("should return return the number of seconds between two days", function(){
    expect(reuseableUserBD.dateDiff("April 20, 2018 03:24:00","December 17, 1995 03:24:00")).toEqual(705020400);
  });

  it("should return users age in Mercury years", function(){
    console.log('yolo',reuseableUserBD.mercury);
    expect(reuseableUserBD.mercuryYear(1)).toEqual(4.166666666666667);
  });

});
