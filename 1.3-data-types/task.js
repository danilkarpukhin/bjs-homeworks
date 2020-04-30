function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let totalAmount, credit, totalMonth, payment;
    if (isNaN (parseInt (percent))) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(parseInt (contribution))) {
        return `Параметр "Начальный взонс" содержит неправильное значение ${contribution}`;
    } else if (isNaN(parseInt(amount))) {
		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
	} else if (new Date > date) {
		return `Параметр дата введен не верно`;
    };
    
    percent = percent / 12 / 100;
	credit = amount - contribution;
	totalMonth = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth()); 
	payment = credit * (percent + percent / (Math.pow(1+percent, totalMonth)-1));
	return totalAmount = Number((payment * totalMonth).toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    if  ((name == "") || (name == null) || (!name == undefined)) {
        return `Привет, мир! Меня зовут Аноним`;
 };
     return greeting = `Привет, мир! Меня зовут ${name}`;
}