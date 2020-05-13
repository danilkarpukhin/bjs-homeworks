function parseCount(amount) {
    const parsedNum = Number.parseInt(amount, 10);
      if (isNaN(parsedNum)) {
        throw new Error("Невалидное значение");
        } else {
         return parsedNum;
    }
  }
  
  function validateCount(amount) {
    try {
      return parseCount(amount);
    } catch(err) {
      return err;
    }
  }
  
  //Задание 2
  
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if ((a + b) < c || (a + c) < b || (b + c) < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    getPerimeter() {
      let perimeter = this.a + this.b + this.c;
      return perimeter;
    }
  
    getArea() {
      let p = this.getPerimeter() / 2
      let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number.parseFloat(area.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try  {
      const triangle = new Triangle(a, b, c);
      return triangle;
    } catch(e) {
      let objectTriangle = {};
      objectTriangle.getPerimeter = objectTriangle.getArea = () => 'Ошибка! Неправильный треугольник';
          return objectTriangle;
    }
  }