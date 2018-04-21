class User{
  constructor(){
    this.planets = {
      'earth': 1,
      'mercury': .24,
      'venus': .62,
      'mars': 1.88,
      'jupiter':11.86
    }
  }

  // planets = {
  //   'mercury': .24,
  //   'venus': .62,
  //   'mars': 1.88,
  //   'jupiter':11.86
  // }


  ageInSeconds(age){
    const secondsInAYear = 3.154e+7;
    let ageInSeconds = age * secondsInAYear;
    return ageInSeconds;
  }

  dateDiffSec(current, bday){
    let time = new Date(current).getTime();
    let actualBDay = new Date(bday).getTime();
    let lifeSecs = (time - actualBDay) / 1000;
    return lifeSecs;
  }

  dateDiff(bday){
    let time = new Date("April 20, 2018 03:24:00").getTime();
    let actualBDay = new Date(bday).getTime();
    let lifeSecs = (time - actualBDay) / 1000;
    return lifeSecs/3.154e+7;
  }

  // mercuryYear(age){
  // let mercuryAge = age / .24;
  //
  // return mercuryAge;
  // }
  //
  // venusYear(age){
  //   let venusAge = age / .62;
  //   return venusAge;
  // }
  //
  // marsYear(age){
  //   let marsAge = age / 1.88;
  //   return marsAge;
  // }
  //
  // jupiterYear(age){
  //   let jupiterAge = age / 11.86;
  //   return jupiterAge;
  // }

  eachPlanetAge(age, planet){
    let actualAge = age/this.planets[planet];
    return actualAge;
  }

  lifeExpectancy(gender){
    let ageofDeath = 0;
    if (gender === 'male'){
      return ageofDeath += 80;
    } else if (gender === 'female'){
      return ageofDeath += 85;
    }
  }

  planetAge(age,planet,gender){
    let lifeExpect = this.lifeExpectancy(gender);
    let bdayAge = this.dateDiff(age);
    let actualAge = bdayAge/this.planets[planet];
    let planetExp = lifeExpect/this.planets[planet];
    let yearsLeft = planetExp - actualAge;
    if(yearsLeft< 0){
      return yearsLeft * -1;
    } else{
      return yearsLeft;
    }
  }
}
export {User};
