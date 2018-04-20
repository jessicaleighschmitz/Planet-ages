
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

}
export {User};
