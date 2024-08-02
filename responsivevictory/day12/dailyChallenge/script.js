const donisKia = {
  color: "red",
  year: 2021,
  model: "K5",
  hasSunroof: true,
  playlist: ["Song 1", "Song 2", "Song 3"], // Array of favorite songs
};

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
};

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  // method to calculate the area
  area = () => this.length * this.width;
}

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // Method to get the salary
  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  // Override getSalary method to include bonus
  getSalary() {
    return super.getSalary() + this.bonus;
  }
}

console.log(donisKia);
console.log(car.year);
const myRectangle = new Rectangle(10, 5); // Creates an instance of the Rectangle class
console.log(myRectangle.area());
const managerJohn = new Manager("John", 5000, 1000);
console.log(managerJohn.getSalary());
