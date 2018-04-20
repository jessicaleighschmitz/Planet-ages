
class User{
  constructor(earth, mercury, venus, mars, jupiter){
    this.earth = earth;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
  }

ageInSeconds(age){
  const secondsInAYear = 3.154e+7;
  let ageInSeconds = age * secondsInAYear;
  return ageInSeconds;
}

dateDiff(current, bday){
  let time = new Date(current).getTime();
  let actualBDay = new Date(bday).getTime();
  let lifeSecs = (time - actualBDay) / 1000;
  return lifeSecs;
}

mercuryYear(age){
let mercuryAge = age / .24;

return mercuryAge;
}

venusYear(age){
  let venusAge = age / .62;
  return venusAge;
}

marsYear(age){
  let marsAge = age / 1.88;
  return marsAge;
}

jupiterYear(age){
  let jupiterAge = age / 11.86;
  return jupiterAge;
}
}
export {User};
