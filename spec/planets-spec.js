import {User} from "../src/planets"

describe("User", function(){
  let reuseableUserBD;
  beforeEach(function(){
    reuseableUserBD = new User('earth', 'mercury', 'venus', 'mars', 'jupiter');
  });

  it("should return seconds alive when years alive is provided", function(){
    expect(reuseableUserBD.ageInSeconds(2)).toEqual(3.154e+7 * 2);
  });

  it("should return return the number of seconds between two days", function(){
    expect(reuseableUserBD.dateDiffSec("April 20, 2018 03:24:00","December 17, 1995 03:24:00")).toEqual(705020400);
  });
  //
  // it("should return users age in Mercury years", function(){
  //   console.log('yolo',reuseableUserBD.mercury);
  //   expect(reuseableUserBD.mercuryYear(1)).toEqual(4.166666666666667);
  // });
  //
  // it("should return users age in Venus years", function(){
  //   expect(reuseableUserBD.venusYear(1)).toEqual(1.6129032258064517);
  // });
  //
  // it("should return users age in Mars years", function(){
  //   expect(reuseableUserBD.marsYear(1)).toEqual(0.5319148936170213);
  // });
  //
  // it("should return users age in Jupiter years", function(){
  //   expect(reuseableUserBD.jupiterYear(1)).toEqual(0.08431703204047218);
  // });
  it("should return user's age depending on each planet", function(){
    expect(reuseableUserBD.eachPlanetAge(2, 'mercury')).toEqual(8.333333333333334);
  });

  it("should determine user's life expectancy", function(){
    expect(reuseableUserBD.lifeExpectancy('male')).toEqual(80);
  });

  it("should calculate how many years left or years past the user is relative to each planet's life expectancy", function(){
    expect(reuseableUserBD.planetAge(5,'mercury','male')).toEqual(131.9726484893522);
  });
});
