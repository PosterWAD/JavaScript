const getSleepHours = day => {
  day = day.toLowerCase();
    if (day === 'monday') {return 8;}
    else if(day === 'tuesday') {return 8;}
    else if(day === 'wednesday') {return 8;}
    else if(day === 'thursday') {return 6;}
    else if(day === 'friday') {return 8;}
    else if(day === 'saturday') {return 7;}
    else if(day === 'sunday') {return 7;}
    else return null;
} 

const getActualSleepHours = () => {
  return getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');
}

const getIdealSleepHours = () => {
   let idealHours = 8
   let daysInWeek = 7
   return idealHours * daysInWeek;
}


const sleepDebt = () => {
  return getIdealSleepHours() - getActualSleepHours();
}

const infoAboutSleep = () => {
 if (getIdealSleepHours() === getActualSleepHours()) {
     return console.log('Good sleep condition.');
 }
 else if (getIdealSleepHours() < getActualSleepHours()) {
    return console.log('You sleep way too much.');
 }
 else if (getIdealSleepHours() > getActualSleepHours()) {
    return console.log('You should sleep more.');
 }
}


console.log(`Hours you slept on saturday: ${getSleepHours('saturday')}`);
console.log(`Hours you slept in total in a single week: ${getActualSleepHours()}`);
console.log(`Hours you should have slept in total in a single week: ${getIdealSleepHours()}`);
console.log(`Hours of sleep you missed: ${sleepDebt()}`);
infoAboutSleep();