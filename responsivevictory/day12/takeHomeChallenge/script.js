class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  // Method to return car details as a string
  getDetails = () =>
    `${this.year} ${this.make} ${this.model} in ${this.color} color`;

  // Method to display car details in HTML
  displayDetails = (elementId) => {
    const element = document.getElementById(elementId);
    element
      ? (element.innerHTML += `<p>${this.getDetails()}</p>`)
      : console.error(`Element with id "${elementId}" not found.`);
  };
}

// Create car instances
const car1 = new Car("Toyota", "Camry", 2020, "blue");
const car2 = new Car("Honda", "Civic", 2019, "red");
const car3 = new Car("Ford", "Mustang", 2021, "black");
const car4 = new Car("Tesla", "Model 3", 2022, "white");

// Log car details to the console
console.log(car1.getDetails());
console.log(car2.getDetails());
console.log(car3.getDetails());
console.log(car4.getDetails());

// Display car details in HTML (assuming you have a div with id "car-container" in your HTML)
window.onload = () => {
  car1.displayDetails("car-container");
  car2.displayDetails("car-container");
  car3.displayDetails("car-container");
  car4.displayDetails("car-container");
};
