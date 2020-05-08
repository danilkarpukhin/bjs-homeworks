function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    let animalSound;
    if (animal == undefined) {
        animalSound = null;
    } else {
        animalSound = animal.sound;
    }
     return animalSound;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let total = 0;
    if (marks.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < marks.length; i ++) {
            total = total + Number(marks[i]);
        }
    }
    let average = total / marks.length;
    let averageMark = Math.round(average);
     return averageMark;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = new Date().getTime();  
  const birthdays = new Date(birthday).getTime();  
  const age = now - birthdays;
  const diff = age / (1000 * 24 * 3600 * 366);
  let verdict = (age > 18) ? true : false;
  return verdict;
}