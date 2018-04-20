
class User{
  constructor(){
    this.planets = {
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

dateDiff(current, bday){
  let time = new Date(current).getTime();
  let actualBDay = new Date(bday).getTime();
  let lifeSecs = (time - actualBDay) / 1000;
  return lifeSecs;
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

planetAge(age, planet){
 let actualAge = age/this.planets[planet];
 return actualAge;
}
//
// lifeExpectncy(gender){
//   let ageofDeath = 0;
//   if (gender === 'male'){
//     return ageofDeath += 80;
//   } else if (gender === 'female'){
//     return ageofDeath += 85;
//   }
// }
}
export {User};
