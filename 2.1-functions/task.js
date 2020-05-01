//Задача №1. Корни квадратного уравнения
function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];

    if (D === 0) {
        roots[0] = -b / (2 * a);
    } else if (D > 0){
        roots[0] = (-b + Math.sqrt(D)) / (2 * a);
        roots[1] = (-b - Math.sqrt(D)) / (2 * a);
    }
    return {D, roots};
}
function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x*2 + ${b}x + ${c}`);
    console.log(`Значегие дискриминанта ${(result.D)}`);
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X1 = ${result.roots[0]}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня X1 =${(result.roots[0])}, X2 = ${(result.roots[1])}`);
    } else {
        console.log(`Уравнение не имеет корней`);
    }
}
showSolutionsMessage(2, 4, 6)
showSolutionsMessage(9, 7, 6)

//Задача №2. Журнал успеваемости

function getAverageScore(data) {
    let averageScore = {};
    for (let object in data) {
        averageScore[object] = getAverageMark(data[object]);
    }
    let values = [];
    for (let elem in averageScore) {
        values.push(averageScore[elem]);
    }
    averageScore.average = getAverageMark(values);
    return averageScore;
}
function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++){
        sum += marks[i] / marks.length;
    }
    return sum;
}
console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],

}));

//Задача №3. Расшифровка данных

function getPersonData(secretData) {
    let first = secretData['aaa'];
    let last = secretData['bbb'];
    return { firstName: getDecodedValue(first), lastName: getDecodedValue(last) }
}

function getDecodedValue(secret) {
    let Name;
    if (secret === 0) {
        Name = 'Родриго';
    } else if (secret === 1) {
        Name = 'Эмильо';
    }
    return Name;
}

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));