function createMain() {
  let main = document.createElement('div');
  main.classList.add('main', 'remove');
  let childOne = document.createElement('div');
  let childTwo = document.createElement('div');
  let childThree = document.createElement('div');
  childOne.textContent = 'Discover';
  childTwo.textContent = 'EgySushi Eatery';
  childThree.textContent = 'Simply Delicious';
  main.append(childOne, childTwo, childThree);
  return main;
}

function createSchedule() {
  let schedule = document.createElement('div');
  schedule.classList.add('opening-hours', 'remove');
  let childOne = document.createElement('div');
  let childTwo = document.createElement('div');
  let childThree = document.createElement('div');
  childOne.textContent = 'Opening Hours';
  childTwo.textContent = 'Week Days: 10:00 AM to 12:00 AM';
  childThree.textContent = 'Fridays: 5:00 PM to 12:00 AM';
  schedule.append(childOne, childTwo, childThree);
  return schedule;
}

export { createMain, createSchedule };
