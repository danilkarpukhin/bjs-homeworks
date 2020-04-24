
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    "use strict";
    let D = Math.pow(b,2)-4*a*c;
    let x = [];
    switch (true) {
    	case (D < 0):
    	  console.log("Корней нет");
    	  break;
    	case (D == 0):
    	  x[0] = (-1*b)/(2*a);
    	  console.log(x);
    	  break;
    	case (D > 0):
    	  x = [((-b)+Math.pow(D,0.5))/(2*a), ((-b)-Math.pow(D,0.5))/(2*a)];
    	  console.log(x);
    	  break;
    }
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length > 5){
        marks = marks.slice(0, 5);
    }
    let averageMark = 0;
    for (let i = 0; i < marks.length; i++){
        averageMark = averageMark + marks[i];
    }
    averageMark = ( averageMark  / marks.length);
     return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let now = new Date();
    let age = now.getFullYear() - dateOfBirthday.getFullYear();
    let message;
    if (age > 18) {
    	message = `Не желаете ли олд-фэшн, ${name} ?`;
    } else if (age < 18) {
    	message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
 
    return message;
}